<template>
    <v-toolbar fixed>
        <v-toolbar-title>Edward Nguyen</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <router-link to="/" class="menu-link">
                <v-btn flat>Home</v-btn>
            </router-link>
            <router-link to="/AboutMe" class="menu-link">
                <v-btn flat>About Me</v-btn>
            </router-link>
            <router-link to="/" class="menu-link">
                <v-btn flat>Resume</v-btn>
            </router-link>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    export default {
        name: 'Header',
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .menu-link {
        text-decoration: none;
        height: 100%;
    }
</style>
