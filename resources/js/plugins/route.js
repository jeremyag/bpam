import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import Login from '../components/user/Login.vue';
import Home from '../components/home/Home.vue';
import UserList from '../components/user/UserList.vue';

const options = {
    routes: [
        {path: '/login', component: Login},
        {path: '/home', component: Home},
        {path: '/users', component: UserList}
    ]
};
export default new VueRouter(options);