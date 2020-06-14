import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import Login from '../components/user/Login.vue';
import Home from '../components/home/Home.vue';


/**
 * Users Module
 */
import UserList from '../components/user/UserList.vue';
import User from '../components/user/User.vue';
import UserCreate from '../components/user/UserCreate.vue';
import UserRead from '../components/user/UserRead.vue';
import UserEdit from '../components/user/UserEdit.vue';

/**
 * Roles Module
 */
import RoleList from '../components/roles/RoleList.vue';

const options = {
    routes: [
        {path: '/login', component: Login},
        {path: '/home', component: Home},
        {path: '/users', component: UserList},
        {path: '/user', component: User,
            children: [
                {path: 'new', component: UserCreate},
                {path: ':id', component: UserRead},
                {path: ':id/edit', component: UserEdit}
            ]
        },
        {path: '/roles', component: RoleList}
    ]
};
export default new VueRouter(options);