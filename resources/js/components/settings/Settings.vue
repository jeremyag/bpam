<template>
    <v-container fluid>
        <v-breadcrumbs :items="items">
            <template v-slot:divider>
                <v-icon>chevron_right</v-icon>
            </template>
        </v-breadcrumbs>
        <v-card flat outlined>
            <v-toolbar flat outlined>
                <v-toolbar-title>Settings</v-toolbar-title>
            </v-toolbar>
            <v-tabs vertical>
                <v-tab :to="'/settings/general'">
                    General
                </v-tab>
                <v-tab :to="'/settings/assessment-fees'">
                    Assessment Fees
                </v-tab>
                <v-tab :to="'/settings/verification-documents'">
                    Verification Documents
                </v-tab>
                <v-tabs-items>
                    <v-container>
                        <router-view></router-view>
                    </v-container>
                </v-tabs-items>
            </v-tabs>
            
        </v-card>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            items: [
                {
                    text: "Settings",
                    disabled: true
                }
            ]
        };
    }
}
</script>