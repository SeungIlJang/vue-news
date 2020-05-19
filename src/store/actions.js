import { 
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchUser,
    fetchItem,
    fetchList,
    } from '../api/index.js';

export default {
    //promise
    // FETCH_NEWS(context){
    //     return fetchNewsList()
    //         .then(response=>
    //             {
    //                 // console.log(response.data)
    //                 //commit을통해 mutatin으로 값 넘김
    //                 context.commit('SET_NEWS',response.data);
    //                 return response;
    //             }
    //         )          
    //         .catch(error => console.log(error));
    // },
    //async
    async FETCH_NEWS(context){
        try{
            const response = await fetchNewsList();
            context.commit('SET_NEWS',response.data);
            return response;
        }catch(error){
            console.log(error);
        }

    },
    // 디스트럭처링 context.commit ==> ({commit})
    // response.data ==> ({data})
    FETCH_JOBS({commit}){
        return fetchJobsList()
            .then(({data}) =>commit('SET_JOBS',data))
            .catch(error =>console.log(error));
    },
    //Helper ==> mapState, mapGetters
    FETCH_ASK(context){
        return fetchAskList()
            .then(response =>context.commit('SET_ASK',response.data))
            .catch(error =>console.log(error));
    },
    //promise
    // FETCH_LIST({commit},pageName){
    //     return fetchList(pageName)
    //         .then(({data}) => commit('SET_LIST',data))
    //         .catch(error =>console.log(error));
    // },
    //async
    async FETCH_LIST({commit},pageName){
        const response = await fetchList(pageName);
        commit('SET_LIST',response.data);
        return response;
        
    },
    FETCH_USER({commit},userName){
        return fetchUser(userName)
            .then(({data}) =>commit('SET_USER',data))
            .catch(error =>console.log(error));
    },
    FETCH_ITEM({commit},id){
        return fetchItem(id)
            .then(({data}) =>commit('SET_ITEM',data))
            .catch(error =>console.log(error));
    },
    
 
}