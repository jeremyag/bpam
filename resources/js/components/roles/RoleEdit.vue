<template>
    <div>
         <v-breadcrumbs :items="items">
            <template v-slot:divider>
                <v-icon>chevron_right</v-icon>
            </template>
        </v-breadcrumbs>
        <bpam-role-form :title="'Role Edit'" :editmode="true"></bpam-role-form>
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
                    text: this.$route.params.id,
                    disabled: true
                }
            ]
        };
    }
}
</script>