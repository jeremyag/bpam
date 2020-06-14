<template>
    <v-container fluid>
        <v-breadcrumbs :items="items">
            <template v-slot:divider>
                <v-icon>chevron_right</v-icon>
            </template>
        </v-breadcrumbs>
        <v-card flat>
            <v-toolbar flat>
                <v-toolbar-title>Settings</v-toolbar-title>
            </v-toolbar>
            <v-tabs vertical>
                <v-tab>
                    General
                </v-tab>
                <v-tab>
                    Assessment Fees
                </v-tab>
                <v-tab>
                    Verification Documents
                </v-tab>
                <v-tab-item>
                    
                </v-tab-item>
                <v-tab-item>
                    Testing
                </v-tab-item>
                <v-tab-item>
                    Testing
                </v-tab-item>
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