import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import Login from '../components/user/Login.vue';
import Home from '../components/home/Home.vue';

const options = {
    routes: [
        {path: '/login', component: Login},
        {path: '/home', component: Home}
    ]
};
export default new VueRouter(options);