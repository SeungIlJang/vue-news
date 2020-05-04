import ListView from './ListView.vue'
import bus from '../utils/bus.js';
export default function createListView(name){
    return{
        //재사용할 인스턴스(컴포넌트) 옵션들
        created(){
            bus.$emit('start:spinner');
            // this.$store.dispatch('FETCH_NEWS')
            //HOC(High Order Component)
            this.$store.dispatch('FETCH_LIST',this.$route.name)
            .then(()=>{
                console.log('feched_news');
                
                bus.$emit('end:spinner');
            })
            .catch(error=>console.log(error));
        },
        name:name,
        render(createElement){
            return createElement(ListView);
        }
    }
}