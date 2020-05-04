<template>
  <div>
    <ul class="news-list">
        <li v-for="item in listItems" v-bind:key="item.id" class="post">                 
            <div class="points">
                {{item.points||0}}
            </div>    
            <div>
                <p class="news-title">
                    <template v-if="item.domain">
                        <a v-bind:href="item.url">{{item.title}}</a>
                    </template>
                    <template v-else>
                        <router-link  v-bind:to="`/item/${item.id}`">
                            {{item.title}}
                        </router-link>
                    </template>

                </p>
                <small class="link-text">
                        {{item.time_ago}} by                     
                    <template v-if="item.user">
                        <router-link v-bind:to="`/user/${item.user}`">{{item.user}}</router-link>                
                    </template>    
                    <template v-else>
                        {{item.domain}}        
                    </template>
                </small>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    computed:{
        listItems(){
            //HOC
            return this.$store.state.list;
            // if(this.$route.name==='news'){
            //     return this.$store.state.news;
            // }else if(this.$route.name==='ask'){
            //     return this.$store.state.ask;
            // }else if(this.$route.name==='jobs'){
            //     return this.$store.state.jobs;
            // }else{
            //     return {};
            // }
            
        }
    },
    created()
    {   
        console.log(this.$route.path);
        console.log(this.$route.name);
        // if(this.$route.name==='news'){
        //     this.$store.dispatch('FETCH_NEWS');
        // }else 
        // if(this.$route.name==='ask'){
        //     this.$store.dispatch('FETCH_ASK');
        // }else if(this.$route.name==='jobs'){
        //     this.$store.dispatch('FETCH_JOBS');
        // }
        
        //VUEX
        // this.$store.dispatch('FETCH_NEWS');
        // fetchNewsList()
        // .then(response=> this.newss = response.data)
        // .catch(error=> console.log(error));
    }  
}
</script>

<style scoped>
.news-list {
  padding: 0;
  margin: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  color: #42b883;
  display: flex;
  align-items: center;
  justify-content: center;
}
.link-text {
  color: #828282;
}
.news-title {
  margin: 0;
}
</style>