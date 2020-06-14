<template>
    <div>
        <v-breadcrumbs :items="items">
            <template v-slot:divider>
                <v-icon>chevron_right</v-icon>
            </template>
        </v-breadcrumbs>
        <bpam-user-form readonly :title="'User'"></bpam-user-form>
    </div>
</template>

<script>
import UserForm from './UserForm.vue';
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
                    text: this.$route.params.id,
                    disabled: true
                }
            ]
        };
    }
}
</script>