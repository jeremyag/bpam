<template>
    <div>
        <v-breadcrumbs :items="items">
            <template v-slot:divider>
                <v-icon>chevron_right</v-icon>
            </template>
        </v-breadcrumbs>
        <bpam-role-form :title="'Create Role'"></bpam-role-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    text: "Roles",
                    to: "/roles",
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