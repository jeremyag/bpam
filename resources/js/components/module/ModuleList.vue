<template>
    <v-container>
        <v-breadcrumbs :items="items">
            <template v-slot:divider>
                <v-icon>chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <v-data-table
            :headers="headers"
            :items="modules"
            >
            <template v-slot:top>
                <v-toolbar flat color="white">
                    <v-toolbar-title>Modules</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        dark
                        class="mb-2"
                        :to="'/module/new'">
                        New Module
                    </v-btn>
                </v-toolbar>
            </template>
            <template v-slot:item.actions="{item}">
                <v-btn icon color="grey" :to="'/module/1/edit'">
                    <v-icon>edit</v-icon>
                </v-btn>
                <v-btn icon color="green" :to="'/module/1'">
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
                    text: 'Modules',
                    disabled: true
                }
            ],
            headers: [
                {text: "Id", value: "id"},
                {text: "Name", value: "name"},
                {text: "Description", value: "description"},
                {text: "path", value: "path"},
                {text: "Show on Navigation", value: "show_on_navigation"},
                {text: "Actions", value: "actions", sortable: false}
            ],
            modules: [
                {
                    id: 1,
                    name: "Users",
                    description: "Users module",
                    path: "/users",
                    show_on_navigation: true,
                }
            ]
        }
    }
}
</script>