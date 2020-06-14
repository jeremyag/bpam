<template>
    <div>
        <v-card class="card-form"
            outlined>
            <v-toolbar flat>
                <v-card-title>{{ title }}</v-card-title>
                <v-spacer></v-spacer>
                <v-menu offset-y v-if="permission.id">
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
                        link>
                            <v-list-item-icon>
                                <v-icon color="green">visibility</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>View</v-list-item-title>
                        </v-list-item>
                        <v-list-item
                        v-else
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
                    <!-- <v-row>
                        <v-col col="12">
                            <v-text-field
                                :disabled="readonly"
                                label="Role Id"
                                :type="'text'"
                                outlined
                                required
                                :rules="rules.requiredRules"
                                clearable
                                v-model="permission.role_id"></v-text-field>
                        </v-col>
                    </v-row> -->
                    <v-row>
                        <v-col col="12">
                            <v-select
                                label="Role Id"
                                :items="roles"
                                v-model="permission.role_id"
                                outlined
                                required
                                :disabled="true"
                            ></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col col="12">
                            <v-select
                                label="Module Id"
                                :items="modules"
                                v-model="permission.module_id"
                                outlined
                                required
                                :disabled="readonly"
                            ></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <v-simple-table>
                                <template v-slot:default>
                                    <thead>
                                        <tr>
                                            <th>Create</th>
                                            <th>Read</th>
                                            <th>Update</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <v-switch v-model="permission.create"></v-switch>
                                            </td>
                                            <td>
                                                <v-switch v-model="permission.read"></v-switch>
                                            </td>
                                            <td>
                                                <v-switch v-model="permission.update"></v-switch>
                                            </td>
                                            <td>
                                                <v-switch v-model="permission.delete"></v-switch>
                                            </td>
                                        </tr>
                                    </tbody>
                                </template>
                            </v-simple-table>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
            <v-card-actions v-if="!readonly">
                <v-spacer></v-spacer>
                <v-btn color="red darken-1" text
                    @click="cancel">Cancel</v-btn>
                <v-btn color="blue darken-1" text
                    @click="validate">Save</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {
    data () {
        return {
            permission: {
                id: 1,
                role_id: 1,
                module_id: "",
                create: false,
                read: false,
                update: false,
                delete: false
            },
            roles: [
                {text: "1 - Superadmin", value: 1}
            ],
            modules: [
                {text: "1 - Users Module", value: 1}
            ],
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
        },
        closeDialog: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        validate() {
            if(this.$refs.form.validate())
            {
                this.save();
            }
        },
        save() {
            this.$emit('closeDialog', this.closeDialog);
        },
        cancel() {
            this.closeDialog = false;
            this.$emit('closeDialog', this.closeDialog)
        }
    },
}
</script>

<style scoped>
    .card-form {
        padding: 15px;
    }
</style>