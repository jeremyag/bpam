<template>
    <v-app-bar 
        flat
        absolute
        app>
        <v-toolbar-title>BPAM <small>v1.0</small></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-menu offset-y>
            <template v-slot:activator="{ on }">
                <v-btn
                    icon
                    v-on="on"
                >
                    <v-icon large>arrow_drop_down_circle</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                   link>
                    <v-list-item-icon>
                        <v-icon>person</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Account Settings</v-list-item-title>
                </v-list-item>
                <v-list-item
                   link>
                    <v-list-item-icon>
                        <v-icon>settings</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>System Settings</v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item
                   link>
                    <v-list-item-icon>
                        <v-icon>exit_to_app</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Logout</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
       
    </v-app-bar>
</template>

<script>
export default {
    
}
</script>