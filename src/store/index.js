import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js'
import actions from './actions.js'
// import { fetchNewsList,fetchAskList,fetchJobsList } from '../api/index.js';


Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        news:[],
        ask:[],
        jobs:[],
        user:{},
        item:{},
        list:[]
    },
    getters:{
        GET_ASK(state){
            return state.ask;
        },
        GET_ITEM(state){
            return state.item;
        }
    },
    mutations,
    // mutations:{
    //     SET_NEWS(state,news){
    //         state.news=news;
    //     },
    //     SET_ASK(state,ask){
    //         state.ask=ask;
    //     },
    //     SET_JOBS(state,jobs){
    //         state.jobs=jobs;
    //     }
    // },
    //actions 비동기 API 호출
    actions,
    // actions:{
    //     FETCH_NEWS(context){
    //         fetchNewsList()
    //             .then(response=>
    //                 {
    //                     console.log(response.data)
    //                     //commit을통해 mutatin으로 값 넘김
    //                     context.commit('SET_NEWS',response.data);
    //                 }
    //             )          
    //             .catch(error => console.log(error));
    //     },
    //     // 디스트럭처링 context.commit ==> ({commit})
    //     // response.data ==> ({data})
    //     FETCH_JOBS({commit}){
    //         fetchJobsList()
    //             .then(({data}) =>commit('SET_JOBS',data))
    //             .catch(error =>console.log(error));
    //     },
    //     //Helper ==> mapState, mapGetters
    //     FETCH_ASK(context){
    //         fetchAskList()
    //             .then(response =>context.commit('SET_ASK',response.data))
    //             .catch(error =>console.log(error));
    //     }
    // },
});