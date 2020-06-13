<template>
    <v-container>
        <v-breadcrumbs :items="items">
            <template v-slot:divider>
                <v-icon>chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <v-data-table
            :headers="headers"
            :items="users"
            >
            <template v-slot:top>
                <v-toolbar flat color="white">
                    <v-toolbar-title>Users</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        dark
                        class="mb-2"
                        :to="'/user/new'">
                        New User
                    </v-btn>
                </v-toolbar>
            </template>
            <template v-slot:item.actions="{item}">
                <v-icon
                    small
                    class="mr-2"
                    color="grey"
                >
                    edit
                </v-icon>
                <v-icon
                    small
                    color="green">
                    visibility
                </v-icon>
            </template>
        </v-data-table>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    text: 'Users',
                    disabled: true
                }
            ],
            headers: [
                {text: "Id", value: "id"},
                {text: "First name", value: "first_name"},
                {text: "Last name", value: "last_name"},
                {text: "Username", value: "username"},
                {text: "Email", value: "email"},
                {text: "Role", value: "role_name"},
                {text: "Actions", value: "actions", sortable: false}
            ],
            users: [
                {
                    id: 1,
                    first_name: "Jeremy",
                    last_name: "Agcaoili",
                    username: "jeremyag",
                    email: "jeremyag@mail.com",
                    role_name: "Superadmin"
                }
            ]
        }
    }
}
</script>