<template>
  <div>
    <section>
      <!-- 사용자 상세정보 -->
    <user-profile v-bind:userInfo="GET_ITEM">
      <div slot="username">
        <router-link v-bind:to="`/user/${GET_ITEM.user}`">
            {{GET_ITEM.user}}
        </router-link>
      </div>
      <template slot="time">{{'Posted '+GET_ITEM.time_ago}}</template>
    </user-profile>

    <!-- <div class="user-container">
      <div>
        <i class="fas fa-user-circle"></i>
      </div>
      <div class="user-description">
        <router-link v-bind:to="`/user/${GET_ITEM.user}`">
          {{GET_ITEM.user}}
        </router-link>
      </div>
    </div>
    <div class="time">
      {{GET_ITEM.time_ago}}
    </div> -->
    </section>
    <section>
    <!-- <p>{{itemInfo.title}}</p> -->  
    <p>{{GET_ITEM.title}}</p>
    <!-- <textarea v-model="itemInfo.content"></textarea> -->
    <div v-html="itemInfo.content"></div>
    </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';

import {mapGetters} from 'vuex';
export default {
  components:{
    UserProfile,
  },
  computed:{
    ...mapGetters(['GET_ITEM']),
    itemInfo(){
      return this.$store.state.item;
    }
  },
  
  created(){
    console.log(this.$route.params.id);
    const id = this.$route.params.id;

    this.$store.dispatch('FETCH_ITEM',id);
  }

}
</script>

<style scoped>
.home {
  padding: 0 1.8rem;
}
.header-container {
  padding-top: 1rem;
}
.user-container {
  display: flex;
  align-items: center;
}
.fa-user-circle {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
h3 {
  margin-bottom: 0.5rem;
  margin-left: 0.2rem;
}
.content {
  border: ridge;
  padding: 0.5rem;
}