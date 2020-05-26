<template>
    <v-navigation-drawer
        v-model="drawer"
        color="#0747a6"
        :mini-variant.sync="mini"
        permanent
        absolute
        dark
    >
        <v-list-item class="px-2">
            <v-list-item-avatar>
                <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
            </v-list-item-avatar>

            <v-list-item-title>Administrator</v-list-item-title>

            <v-btn
            icon
            @click.stop="mini = !mini"
            >
                <v-icon>chevron_left</v-icon>
            </v-btn>
        </v-list-item>
        <v-divider></v-divider>
        <v-list 
            dense="true"
            nav="true"
            rounded="true">
            <v-list-item link="true">
                <v-list-item-icon>
                    <v-icon>home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Home</v-list-item-title>
            </v-list-item>   
            <v-list-item link="true">
                <v-list-item-icon>
                    <v-icon>description</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Applications</v-list-item-title>
            </v-list-item>
            <v-list-item link="true">
                <v-list-item-icon>
                    <v-icon>business</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Businesses</v-list-item-title>
            </v-list-item>
            <v-list-item link="true">
                <v-list-item-icon>
                    <v-icon>verified_user</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Verifications</v-list-item-title>
            </v-list-item>
            <v-list-item link="true">
                <v-list-item-icon>
                    <v-icon>account_balance_wallet</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Assessments</v-list-item-title>
            </v-list-item>
            <v-list-item link="true">
                <v-list-item-icon>
                    <v-icon>security</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Fire Safety Assessments</v-list-item-title>
            </v-list-item>
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