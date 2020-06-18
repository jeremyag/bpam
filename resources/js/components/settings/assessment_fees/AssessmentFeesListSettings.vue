<template>
    <div>
        <v-data-table
        :headers="headers"
        :items="assessmentFees">
            <template v-slot:top>
                <v-toolbar flat color="white">
                    <v-toolbar-title>Assessment Fees Lists</v-toolbar-title>
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
                                        v-on="on">New Assessment Fee</v-btn>
                                </template>
                                <v-card>
                                    <v-card-title>
                                        <span class="headline">New Assessment</span>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-container>
                                            <bpam-assessment-fee-settings-form></bpam-assessment-fee-settings-form>
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
                                :to="'/settings/assessment/fee/new'"
                                >New Assessment Fee</v-btn>
                        </div>
                    </div>
                </v-toolbar>
            </template>
            <template v-slot:item.actions>
                <div v-if="allowReadAction">
                    <div
                        v-if="byDialog">
                            <v-dialog v-model="readDialog" max-width="600px" persistent>
                                <template v-slot:activator="{ on, attrs }">
                                        <v-btn icon
                                            small
                                            v-bind="attrs"
                                            v-on="on"
                                            class="mr-2"><v-icon>visibility</v-icon></v-btn>
                                </template>
                                <v-card>
                                    <v-card-title>
                                        <span class="headline">Assessment Fee</span>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-container>
                                            <bpam-assessment-fee-settings-form readMode></bpam-assessment-fee-settings-form>
                                        </v-container>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="red darken-1" text @click="readDialog = false">Close</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                    </div>
                    <div v-else>
                        <v-icon
                            small
                            class="mr-2"></v-icon>
                    </div>
                </div>
            </template>
        </v-data-table>
    </div>
</template>

<script>
    import bpamAssessmentFeeSettingsForm from './AssessmentFeeSettingsForm';
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
                assessmentFees: [
                    {
                        id: "1",
                        name: "Assessment Fees",
                        type: "Type",
                        description: "Description",
                    }
                ],
                dialog: false,
                readDialog: false,
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
            byDialog: {
                type: Boolean,
                default: false
            },
        },
        components: {
            bpamAssessmentFeeSettingsForm
        }
    }
</script>