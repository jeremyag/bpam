<template>
    <v-container>
        <v-form>
            <v-row>
                <v-col cols="12">
                    <v-text-field
                        label="Municipality"
                        outlined
                        v-model="general.municipality"
                        required
                        :disabled="!enabledChange"
                        type="text"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-text-field
                        label="BPLO"
                        outlined
                        v-model="general.bplo"
                        required
                        :disabled="!enabledChange"
                        type="text"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" class="text-right">
                    <v-btn 
                        v-if="!enabledChange"
                        color="primary" text @click="enabledChange = true">Change</v-btn>
                    <v-btn
                        v-if="enabledChange"
                        color="red darken-1" text @click="enabledChange = false">Cancel</v-btn>
                    <v-btn 
                        v-if="enabledChange"
                        color="primary" text>Update</v-btn>
                </v-col>
            </v-row>
        </v-form>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                general: {
                    municipality: "Lian, Batangas",
                    bplo: "Eng'r. Rogelio B. Vergara"
                },
                enabledChange: false
            }
        },
        methods: {
            changeMunicipality() {
                console.log("GERE");
            }
        }
    }
</script>