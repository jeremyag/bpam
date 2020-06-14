<template>
    <div>
        <v-breadcrumbs :items="items">
            <template v-slot:divider>
                <v-icon>chevron_right</v-icon>
            </template>
        </v-breadcrumbs>
        <bpam-user-form :title="'User Registration'"></bpam-user-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    text: "Users",
                    to: "/users",
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