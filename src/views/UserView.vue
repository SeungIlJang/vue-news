<template>
  <div>
    <user-profile v-bind:userInfo="userInfo">
      <div slot="username">{{userInfo.id}}</div>
      <template slot="time">{{'Joined '+userInfo.created}},</template>
      <div slot="karma">{{ userInfo.karma}}</div>
    </user-profile>

     <!-- <div class="user-container">
      <div>
        <i class="fas fa-user-circle"></i>
      </div>
      <div class="user-description">
      <p>name:{{userInfo.id}}</p>
      <p>karma:{{userInfo.karma}}</p>
      <p>created:{{userInfo.created}}</p>
      </div>
    </div> -->
  </div>
 
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
export default {
  components:{
    UserProfile,
  },
  computed:{
    userInfo(){
      return this.$store.state.user;
    }
  },
  created(){
    console.log(this.$route.params.id);
    const userName = this.$route.params.id;

    this.$store.dispatch('FETCH_USER',userName);
  }

}
</script>

<style>

</style>