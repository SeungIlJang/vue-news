<template>
    <div>
        <list-item></list-item>
        <!-- <ul class="news-list">
            <li v-for="item in this.$store.state.news" v-bind:key="item.id" class="post">                 
                <div class="points">
                    {{item.points}}
                </div>    
                <div>
                    <p class="news-title">
                        <a v-bind:href="item.url">{{item.title}}</a>
                    </p>
                    <small class="link-text">
                         {{item.time_ago}} by 
                        <router-link v-bind:to="'/user/'+item.user">{{item.user}}</router-link>                
                        <router-link v-bind:to="`/user/${item.user}`">{{item.user}}</router-link>                
                    </small>
                </div>
            </li>
        </ul> -->
    </div>
</template>

<script>
// import { fetchNewsList } from '../api/index.js';
import ListItem from '../components/ListItem.vue';
// import bus from '../utils/bus.js';
import ListMixin from '../mixins/ListMixin.js';

export default {
    components:{
        ListItem,
    },
    mixins: [ListMixin],
    // mounted() {
    //     bus.$emit('end:spinner');
    // },
    //Lifecycle Hook - created,mounted
    //HOC사용하면 주석처리 HOC에서 호출해줌
    // created(){
    //     bus.$emit('start:spinner');
    //      this.$store.dispatch('FETCH_NEWS')
    //     .then(()=>{
    //         console.log('feched_news');
            
    //         bus.$emit('end:spinner');
    //     })
    //     .catch(error=>console.log(error));
        
    // },
    
    // data(){
    //     return {
    //         newss:[]
    //     }
    // },
    // created()
    // {   //VUEX
    //     this.$store.dispatch('FETCH_NEWS');
    //     // fetchNewsList()
    //     // .then(response=> this.newss = response.data)
    //     // .catch(error=> console.log(error));
    // }  

}
</script>

<style>

</style>