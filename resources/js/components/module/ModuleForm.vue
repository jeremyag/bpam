<template>
    <div>
        <v-card class="card-form"
            outlined>
            <v-toolbar flat>
                <v-card-title>{{ title }}</v-card-title>
                <v-spacer></v-spacer>
                <v-menu offset-y v-if="module.id">
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
                        :to="'/module/'+ module.id"
                        link>
                            <v-list-item-icon>
                                <v-icon color="green">visibility</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>View</v-list-item-title>
                        </v-list-item>
                        <v-list-item
                        v-else
                        :to="'/module/'+module.id+'/edit'"
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
                                outlined
                                required
                                :rules="rules.requiredRules"
                                v-model="module.name"></v-text-field>
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
                                v-model="module.description"></v-textarea>
                       </v-col>
                    </v-row>
                    <v-row>
                        <v-col col="12">
                            <v-text-field
                                :disabled="readonly"
                                label="Path"
                                outlined
                                required
                                :rules="rules.requiredRules"
                                v-model="module.path"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <v-switch
                                :disabled="readonly"
                                label="Show On Navigation"
                                v-model="module.show_on_navigation"></v-switch>
                        </v-col>
                    </v-row>
                </v-form>
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
export default {
    data () {
        return {
            module: {
                id: 1,
                name: "",
                description: "",
                path: "",
                show_on_navigation: false
            },
            valid: true,
            rules: {
                requiredRules: [
                    v => !!v || 'Required',
                ],
                emailRules: [
                    v => !!v || 'Required',
                    v => /.+@.+\..+/.test(v) || "Email must be valid"
                ],
                confirmPasswordRules: [
                    v => !!v || "Required",
                    v => this.user.password == this.user.confirm_password || "Password don't matched"
                    
                ]
            }
        }
    },
    props: {
        readonly: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: "User Form"
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
    }
}
</script>

<style scoped>
    .card-form {
        padding: 15px;
    }
</style>