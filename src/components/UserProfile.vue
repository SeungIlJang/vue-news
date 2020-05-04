<template>  
    <div class="user-container">
        <div>
            <i class="fas fa-user-circle"></i>
        </div>
        <div class="user-description">
            <slot name="username"></slot>
            <!-- <div>{{userInfo.id}}</div> -->
            <!-- <router-link v-bind:to="`/user/${userInfo.id}`">
            {{userInfo.id}}
            </router-link> -->
            
            <div class="time">
                <slot name="time"></slot>
                <!-- {{userInfo.created}}                 -->
            </div>
            <div>
                <slot name="karma"></slot>
            </div>
        </div> 
    </div>
</template>

<script>
export default {
    //방법2
    props:{
        userInfo:Object,    
    },

    //방법1
    // computed:{
    //     userInfo(){
    //     return this.$store.state.user;
    //     }
    // },
}
</script>

<style scoped>
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
  color: #828282;
}
</style>