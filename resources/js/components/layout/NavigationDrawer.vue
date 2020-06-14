<template>
    <v-navigation-drawer
        v-model="drawer"
        color="#0747a6"
        :mini-variant.sync="mini"
        permanent
        dark
        app
        fixed
    >
        <v-list-item class="px-2">
            <v-list-item-avatar>
                <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title>Jeremy Agcaoili</v-list-item-title>
            <v-list-item-subtitle>Administrator</v-list-item-subtitle>
            </v-list-item-content>

            <v-btn
            icon
            @click.stop="mini = !mini"
            >
                <v-icon>chevron_left</v-icon>
            </v-btn>
        </v-list-item>
        <v-divider></v-divider>
        <v-list 
            dense
            nav
            rounded>
            <v-list-item link :to="'/home'">
                <v-list-item-icon>
                    <v-icon>home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Home</v-list-item-title>
            </v-list-item>   
            <v-subheader inset>Management</v-subheader>
            <v-list-item-group>
                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>description</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Applications</v-list-item-title>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>business</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Businesses</v-list-item-title>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>verified_user</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Verifications</v-list-item-title>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>account_balance_wallet</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Assessments</v-list-item-title>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>security</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Fire Safety Assessments</v-list-item-title>
                </v-list-item>
            </v-list-item-group>
            <v-subheader inset>Administration</v-subheader>
            <v-list-item-group>
                <v-list-item link :to="'/users'">
                    <v-list-item-icon>
                        <v-icon>supervised_user_circle</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Users</v-list-item-title>
                </v-list-item>
                <v-list-item link :to="'/roles'">
                    <v-list-item-icon>
                        <v-icon>perm_identity</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Roles</v-list-item-title>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>how_to_reg</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Permissions</v-list-item-title>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    data() {
        return {
            drawer: true,
            mini: true
        }
    }
}
</script>