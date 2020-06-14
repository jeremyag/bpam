<template>
    <v-data-table
        :headers="headers"
        :items="permissions"
        >
        <template v-slot:top>
            <v-toolbar flat color="white">
                <v-toolbar-title>Permissions</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn
                    v-if="allowNewAction"
                    color="primary"
                    dark
                    class="mb-2"
                    >
                    New Permission
                </v-btn>
            </v-toolbar>
        </template>
        <template v-slot:item.actions="{item}">
            <v-btn icon color="grey" v-if="allowEditAction">
                <v-icon>edit</v-icon>
            </v-btn>
            <v-btn icon color="green">
                <v-icon>visibility</v-icon>
            </v-btn>
        </template>
    </v-data-table>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    text: 'Permission',
                    disabled: true
                }
            ],
            headers: [
                {text: "Id", value: "id"},
                {text: "Module", value: "module"},
                {text: "Create", value: "create", sortable: false},
                {text: "Read", value: "read", sortable: false},
                {text: "Update", value: "update", sortable: false},
                {text: "Delete", value: "delete", sortable: false},
                {text: "Actions", value: "actions", sortable: false}
            ],
            permissions: [
                {
                    id: 1,
                    module: "User",
                    create: true,
                    read: true,
                    update: true,
                    delete: true,
                }
            ]
        }
    },
    props: {
        allowNewAction: {
            type: Boolean,
            default: false
        },
        allowEditAction: {
            type: Boolean,
            default: false
        }
    }
}
</script>