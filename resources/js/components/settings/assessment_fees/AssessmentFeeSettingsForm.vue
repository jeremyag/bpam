<template>
    <v-form>
        <v-row>
            <v-col cols="12">
                <v-text-field
                    :disabled="readMode ? true : false"
                    outlined
                    label="Name"
                    v-model="assessmentFee.name"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-text-field
                    :disabled="readMode ? true : false"
                    outlined
                    label="Type"
                    v-model="assessmentFee.type"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-textarea
                    :disabled="readMode ? true : false"
                    outlined
                    label="Description"
                    v-model="assessmentFee.description"></v-textarea>
            </v-col>
        </v-row>
    </v-form>
</template>

<script>
    export default {
        data() {
            return {
                assessmentFee: {
                    id: 1,
                    name: "",
                    description: ""
                }
            };
        },
        props: {
            readMode: {
                default: true,
                type: Boolean
            },
        }
    };
</script>