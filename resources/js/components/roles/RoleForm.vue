<template>
    <div>
        <v-card class="card-form"
            outlined>
            <v-toolbar flat>
                <v-card-title>{{ title }}</v-card-title>
                <v-spacer></v-spacer>
                <v-menu offset-y v-if="role.id">
                    <template v-slot:activator="{ on }">
                        <v-btn
                            icon
                            v-on="on"
                        >
                            <v-icon>more_vert</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item
                        v-if="editmode"
                        :to="'/role/'+role.id"
                        link>
                            <v-list-item-icon>
                                <v-icon color="green">visibility</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>View</v-list-item-title>
                        </v-list-item>
                        <v-list-item
                        v-else
                        :to="'/role/'+role.id+'/edit'"
                        link>
                            <v-list-item-icon>
                                <v-icon color="grey">edit</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Edit</v-list-item-title>
                        </v-list-item>
                        <v-list-item
                        link>
                            <v-list-item-icon>
                                <v-icon color="red">delete</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Delete</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-toolbar>
            <v-card-text>
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-row>
                        <v-col col="12">
                            <v-text-field
                                :disabled="readonly"
                                label="Name"
                                :type="'text'"
                                outlined
                                required
                                :rules="rules.requiredRules"
                                v-model="role.name"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col col="12">
                            <v-textarea
                                :disabled="readonly"
                                label="Description"
                                outlined
                                required
                                :rules="rules.requiredRules"
                                v-model="role.description"></v-textarea>
                        </v-col>
                    </v-row>
                </v-form>
                 <v-divider></v-divider>
                <v-row>
                    <v-col cols="12">
                        <bpam-permission-list :allowEditAction="!readonly"></bpam-permission-list>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions v-if="!readonly">
                <v-spacer></v-spacer>
                <v-btn color="red darken-1" text
                    @click="clear">Clear</v-btn>
                <v-btn color="blue darken-1" text
                    @click="validate">Save</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import bpamPermissionList from '../permission/PermissionList.vue';

export default {
    data () {
        return {
            role: {
                id: 1,
                name: "",
                description: "",
            },
            valid: true,
            rules: {
                requiredRules: [
                    v => !!v || 'Required',
                ],
            },
        }
    },
    props: {
        readonly: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: "Role Form"
        },
        editmode: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        validate() {
            this.$refs.form.validate()
        },
        clear() {
            this.$refs.form.reset()
        }
    },
    components: {
        bpamPermissionList
    }
}
</script>

<style scoped>
    .card-form {
        padding: 15px;
    }
</style>