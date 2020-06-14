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
                    <v-toolbar-title>Roles</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        dark
                        class="mb-2"
                        :to="'/role/new'">
                        New Role
                    </v-btn>
                </v-toolbar>
            </template>
            <template v-slot:item.actions="{item}">
                <v-btn icon color="grey" :to="'/role/1/edit'">
                    <v-icon>edit</v-icon>
                </v-btn>
                <v-btn icon color="green" :to="'/role/1'">
                    <v-icon>visibility</v-icon>
                </v-btn>
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
                    text: 'Roles',
                    disabled: true
                }
            ],
            headers: [
                {text: "Id", value: "id"},
                {text: "Name", value: "name"},
                {text: "Description", value: "description"},
                {text: "Actions", value: "actions", sortable: false}
            ],
            users: [
                {
                    id: 1,
                    name: "Superadmin",
                    description: "Super Admin role",
                }
            ]
        }
    }
}
</script>