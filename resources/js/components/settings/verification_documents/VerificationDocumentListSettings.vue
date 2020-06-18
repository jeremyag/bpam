<template>
    <div>
        <v-data-table
        :headers="headers"
        :items="verificationDocuments">
            <template v-slot:top>
                <v-toolbar flat color="white">
                    <v-toolbar-title>Verification Document Lists</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <div v-if="allowNewAction">
                        <div v-if="byDialog">
                            <v-dialog v-model="dialog" max-width="600px" persistent>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        color="primary"
                                        dark
                                        class="mb-2"
                                        v-bind="attrs"
                                        v-on="on">New Verification Document</v-btn>
                                </template>
                                <v-card>
                                    <v-card-title>
                                        <span class="headline">New Verification Document</span>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-container>
                                            <bpam-verification-document-settings-form></bpam-verification-document-settings-form>
                                        </v-container>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="red darken-1" text @click="dialog = false">Cancel</v-btn>
                                        <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </div>
                        <div v-else>
                            <v-btn
                                color="primary"
                                dark
                                class="mb-2"
                                :to="'/settings/verification-document/new'"
                                >New Assessment Fee</v-btn>
                        </div>
                    </div>
                </v-toolbar>
            </template>
            <template v-slot:item.actions>
                <span v-if="allowReadAction">
                    <span
                        v-if="byDialog">
                        <v-dialog v-model="readDialog" max-width="600px" persistent>
                            <template v-slot:activator="{ on, attrs }">
                                    <v-btn icon
                                        small
                                        v-bind="attrs"
                                        v-on="on"
                                        color="green"
                                        class="mr-2"><v-icon>visibility</v-icon></v-btn>
                            </template>
                            <v-card>
                                <v-card-title>
                                    <span class="headline">Verification Document</span>
                                </v-card-title>
                                <v-card-text>
                                    <v-container>
                                        <bpam-verification-document-settings-form readonly></bpam-verification-document-settings-form>
                                    </v-container>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="red darken-1" text @click="readDialog = false">Close</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </span>
                    <div v-else>
                        <v-icon
                            small
                            class="mr-2"></v-icon>
                    </div>
                </span>

                <span v-if="allowEditAction">
                    <span v-if="byDialog">
                        <v-dialog v-model="editDialog" max-width="600px" persistent>
                            <template v-slot:activator="{ on, attrs }">
                                    <v-btn icon
                                        small
                                        v-bind="attrs"
                                        v-on="on"
                                        color="grey"
                                        class="mr-2"><v-icon>edit</v-icon></v-btn>
                            </template>
                            <v-card>
                                <v-card-title>
                                    <span class="headline">Edit Verification Document</span>
                                </v-card-title>
                                <v-card-text>
                                    <v-container>
                                        <bpam-verification-document-settings-form></bpam-verification-document-settings-form>
                                    </v-container>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="red darken-1" text @click="editDialog = false">Close</v-btn>
                                    <v-btn color="blue darken-1" text @click="editDialog = false">Update</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </span>
                </span>

                <span v-if="allowDeleteAction">
                    <span v-if="byDialog">
                        <v-dialog v-model="deleteDialog" max-width="600px" persistent>
                            <template v-slot:activator="{ on, attrs }">
                                    <v-btn icon
                                        small
                                        v-bind="attrs"
                                        v-on="on"
                                        color="red"
                                        class="mr-2"><v-icon>delete</v-icon></v-btn>
                            </template>
                            <v-card>
                                <v-card-title>
                                    <span class="headline">Delete Assessment Fee</span>
                                </v-card-title>
                                <v-card-text>
                                    <v-container>
                                        Are you sure you want to delete this item?
                                        <bpam-verification-document-settings-form readonly></bpam-verification-document-settings-form>
                                    </v-container>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="red darken-1" text @click="deleteDialog = false">Cancel</v-btn>
                                    <v-btn color="orange darken-1" text @click="deleteDialog = false">Delete</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </span>
                </span>
            </template>
        </v-data-table>
    </div>
</template>

<script>
    import bpamVerificationDocumentSettingsForm from '../verification_documents/VerificationDocumentSettingsForm.vue';
    export default {
        data() {
            return {
                headers: [
                    {
                        text: "Id",
                        sortable: true,
                        value: "id"
                    },
                    {
                        text: "Name",
                        sortable: true,
                        value: "name"
                    },
                    {
                        text: "Type",
                        sortable: true,
                        value: "type"
                    },
                    {
                        text: "Description",
                        sortable: true,
                        value: "description"
                    },
                    {
                        text: "Actions",
                        sortable: false,
                        value: "actions"
                    }
                ],
                verificationDocuments: [
                    {
                        id: "1",
                        name: "Verification Documents",
                        type: "Type",
                        description: "Description",
                    }
                ],
                dialog: false,
                readDialog: false,
                editDialog: false,
                deleteDialog: false
            }
        },
        props: {
            allowNewAction: {
                type: Boolean,
                default: false
            },
            allowReadAction: {
                type: Boolean,
                default: false
            },
            allowEditAction: {
                type: Boolean,
                default: false
            },
            allowDeleteAction: {
                type: Boolean,
                default: false
            },
            byDialog: {
                type: Boolean,
                default: false
            },
        },
        components: {
            bpamVerificationDocumentSettingsForm
        }
    }
</script>