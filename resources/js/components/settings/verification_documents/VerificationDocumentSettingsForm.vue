<template>
    <v-form>
        <v-row>
            <v-col cols="12">
                <v-text-field
                    :disabled="readonly ? true : false"
                    outlined
                    label="Name"
                    v-model="verificationDocument.name"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-text-field
                    :disabled="readonly ? true : false"
                    outlined
                    label="Type"
                    v-model="verificationDocument.type"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-textarea
                    :disabled="readonly ? true : false"
                    outlined
                    label="Description"
                    v-model="verificationDocument.description"></v-textarea>
            </v-col>
        </v-row>
    </v-form>
</template>

<script>
    export default {
        data() {
            return {
                verificationDocument: {
                    id: 1,
                    name: "",
                    description: ""
                }
            };
        },
        props: {
            readonly: {
                default: false,
                type: Boolean
            },
        }
    };
</script>