import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
// import createListView from '../views/CreateListView.js';


Vue.use(VueRouter);

export const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            redirect:'/news',
        },
        {
            //path:url주소
            path:'/news',
            name:'news',
            //component:url 주소로 갔을때 표시될 컴포넌트
            component:NewsView,
            //HOC(High Order Component)
            // component:createListView('NewsView'),
            beforeEnter: (to, from, next) => {
                console.log('to',to);
                console.log('from',from);
                console.log('next',next);
                
                next();
            },
        },
        {
            path:'/ask',
            name:'ask',
            component:AskView,
            //HOC(High Order Component)
            // component:createListView('AskView'),
        },
        {
            path:'/jobs',
            name:'jobs',
            component:JobsView,
            //HOC(High Order Component)
            // component:createListView('JobsView'),
        },
        {
            path:'/user/:id',
            component:UserView,
        },
        {
            path:'/item/:id',
            component:ItemView,
        }


    ]
});