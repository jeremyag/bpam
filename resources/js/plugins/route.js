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
import Role from '../components/roles/Role.vue';
import RoleCreate from '../components/roles/RoleCreate.vue';
import RoleRead from '../components/roles/RoleRead.vue';
import RoleEdit from '../components/roles/RoleEdit.vue';

/**
 * Modules Module
 */
import ModuleList from '../components/module/ModuleList.vue';
import Module from '../components/module/Module.vue';
import ModuleCreate from '../components/module/ModuleCreate.vue';
import ModuleRead from '../components/module/ModuleRead.vue';
import ModuleEdit from '../components/module/ModuleEdit.vue';

/**
 * Settings Module
 */
import Settings from '../components/settings/Settings.vue';
import GeneralSettings from '../components/settings/General.vue';
import AssessmentFeesListSettings from '../components/settings/assessment_fees/AssessmentFeesListSettings.vue';
import VerificationDocumentListSettings from '../components/settings/verification_documents/VerificationDocumentListSettings.vue';

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
        {path: '/roles', component: RoleList},
        {path: '/role', component: Role,
            children: [
                {path: 'new', component: RoleCreate},
                {path: ':id', component: RoleRead},
                {path: ':id/edit', component: RoleEdit}
            ]
        },
        {path: '/modules', component: ModuleList},
        {path: '/module', component: Module,
            children: [
                {path: 'new', component: ModuleCreate},
                {path: ':id', component: ModuleRead},
                {path: ':id/edit', component: ModuleEdit}
            ]    
        },
        {path: '/settings', component: Settings,
            children: [
                {path: 'general', component: GeneralSettings},
                {
                    path: 'assessment-fees',
                    component: AssessmentFeesListSettings,
                    props: {
                        allowNewAction: true,
                        allowReadAction: true,
                        allowEditAction: true,
                        allowDeleteAction: true,
                        byDialog: true
                    }
                },
                {
                    path: 'verification-documents',
                    component: VerificationDocumentListSettings,
                    props: {
                        allowNewAction: true,
                        allowReadAction: true,
                        allowEditAction: true,
                        allowDeleteAction: true,
                        byDialog: true
                    }
                }
            ]
        }
    ]
};
export default new VueRouter(options);