<template>
    <div>
        <list-item></list-item>
        <!-- <p v-for="job in this.$store.state.jobs" v-bind:key="job.id">                
               <a v-bind:href="job.url"> {{job.title}}</a>
               <small>{{job.time_ago}} by {{job.user}}</small>
        </p> -->
    </div>
</template>

<script>
// import {fetchJobsList} from '../api/index.js'
import ListItem from '../components/ListItem.vue';
import ListMixin from '../mixins/ListMixin.js';
export default {
    components:{
        ListItem,
    },
    mixins: [ListMixin],
    // data(){
    //     return {
    //         jobs:[]
    //     }
    // },
    // created(){
    //     this.$store.dispatch('FETCH_JOBS');
    //     // fetchJobsList()
    //     // .then(response=> this.jobs = response.data)
    //     // .catch(error=> console.log(error));
    // } 
}
</script>

<style>

</style>