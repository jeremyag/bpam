<template>
    <div>
        <v-breadcrumbs :items="items">
            <template v-slot:divider>
                <v-icon>chevron_right</v-icon>
            </template>
        </v-breadcrumbs>
        <bpam-module-form :title="'New Module'"></bpam-module-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    text: "Modules",
                    to: "/modules",
                    link: true
                },
                {
                    text: "New",
                    disabled: true
                }
            ]
        };
    },
}
</script>