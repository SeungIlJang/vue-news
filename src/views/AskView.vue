<template>
    <div>  
        <list-item></list-item>
        <!-- <p v-for="item in GET_ASK" v-bind:key="item.id">                
                <router-link  v-bind:to="`/item/${item.id}`">
                    {{item.title}}
                </router-link>
                <small>{{item.time_ago}} by {{item.user}}</small>
        </p> -->
    </div>

</template>

<script>
// import {fetchAskList} from '../api/index.js'
// import {mapState} from 'vuex';
// import {mapGetters} from 'vuex';
import ListItem from '../components/ListItem.vue';
import ListMixin from '../mixins/ListMixin.js';
// import bus from '../utils/bus.js';

export default {
    components:{
        ListItem,
    },
    // mounted() {
    //     bus.$emit('end:spinner');
    // },
    mixins:[ListMixin],
    // computed:{
    //     //#3 HELPER + getters
    //     // ...mapGetters({
    //     //     fetchedAsk:'GET_ASK'
    //     // }),
    //     //getters와 이름을 같게 사용하고 싶으면 []로 선언
    //     ...mapGetters([
    //         'GET_ASK'
    //     ]),
    //     //#2 HELPER
    //     // ...mapState({
    //     //     fetchedAsk : state => state.ask,        
    //     // }),
    //     //#1
    //     // ask(){
    //     //     return this.$store.state;
    //     // }
    // },
    // data(){
    //     return {
    //         asks:[]
    //     }
    // },
    // created(){
    //     this.$store.dispatch('FETCH_ASK');
    //     // fetchAskList()
    //     // .then(response =>   this.asks = response.data)
    //     // .catch(error =>console.log(error));
    // }  
}
</script>

<style>

</style>