<template>
    <div>
        <v-card class="card-form"
            outlined>
            <v-toolbar flat>
                <v-card-title>{{ title }}</v-card-title>
                <v-spacer></v-spacer>
                <v-menu offset-y v-if="user.id">
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
                        :to="'/user/'+user.id"
                        link>
                            <v-list-item-icon>
                                <v-icon color="green">visibility</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>View</v-list-item-title>
                        </v-list-item>
                        <v-list-item
                        v-else
                        :to="'/user/'+user.id+'/edit'"
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
                        <v-col col="4">
                            <v-text-field
                                :disabled="readonly"
                                label="First name"
                                outlined
                                required
                                :rules="rules.requiredRules"
                                v-model="user.first_name"></v-text-field>
                        </v-col>
                       <v-col col="4">
                            <v-text-field
                                :disabled="readonly"
                                label="Middle name"
                                outlined
                                required
                                :rules="rules.requiredRules"
                                v-model="user.middle_name"></v-text-field>
                       </v-col>
                        <v-col col="4">
                            <v-text-field
                                :disabled="readonly"
                                label="Last name"
                                outlined
                                required
                                :rules="rules.requiredRules"
                                v-model="user.last_name"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col col="12">
                            <v-text-field
                                :disabled="readonly"
                                label="Email"
                                :type="'email'"
                                outlined
                                required
                                :rules="rules.emailRules"
                                v-model="user.email"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col col="12">
                            <v-text-field
                                :disabled="readonly"
                                label="Username"
                                outlined
                                required
                                :rules="rules.requiredRules"
                                v-model="user.username"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                       <v-col col="6">
                            <v-text-field
                            :disabled="readonly"
                            label="Password"
                            outlined
                            required
                            :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                            @click:append="showPassword = !showPassword"
                            :type="showPassword ? 'text' : 'password'"
                            :rules="rules.requiredRules"
                            v-model="user.password"></v-text-field>
                       </v-col>
                       <v-col col="6">
                            <v-text-field
                            :disabled="readonly"
                            label="Confirm Password"
                            outlined
                            required
                            :append-icon="showPassword2 ? 'visibility' : 'visibility_off'"
                            @click:append="showPassword2 = !showPassword2"
                            :type="showPassword2 ? 'text' : 'password'"
                            :rules="rules.confirmPasswordRules"
                            v-model="user.confirm_password"></v-text-field>
                       </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <v-select
                                :disabled="readonly"
                                label="Role"
                                outlined
                                :items="roles"
                                :rules="rules.requiredRules"
                                v-model="user.role"></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <v-select
                                :disabled="readonly"
                                label="Active"
                                outlined
                                :items="active"
                                :rules="rules.requiredRules"
                                v-model="user.active"></v-select>
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
            user: {
                id: 1,
                first_name: "",
                middle_name: "",
                last_name: "",
                email: "",
                username: "",
                password: "",
                confirm_password: "",
                role: ""
            },
            valid: true,
            title: "User Registration",
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
            },
            showPassword: false,
            showPassword2: false,
            roles: [
                {text: "Superadmin", value:1}
            ],
            active: [
                {text: "Active", value: "active"},
                {text: "Deactivated", value: "deactivated"}
            ]
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