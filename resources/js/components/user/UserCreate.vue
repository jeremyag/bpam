<template>
    <div>
        <v-breadcrumbs :items="items">
            <template v-slot:divider>
                <v-icon>chevron_right</v-icon>
            </template>
        </v-breadcrumbs>
        <app-user-form></app-user-form>
    </div>
</template>

<script>
import UserForm from "./UserForm";
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
    components: {
        'AppUserForm': UserForm
    }
}
</script>