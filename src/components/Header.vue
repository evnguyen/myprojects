<template>
    <div>
        <v-navigation-drawer v-model="side_nav" fixed temporary>
            <v-list class="pa-1">
                <v-list-tile >
                    <v-list-tile-content>
                        <v-list-tile-title class="title">Edward Nguyen</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>

            <v-list class="pt-0" dense>
                <v-divider></v-divider>
                <router-link to="/" class="menu-link">
                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <i class="material-icons">home</i>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title >Home</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </router-link>

                <router-link to="/AboutMe" class="menu-link">
                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <i class="material-icons">person</i>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title >About Me</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </router-link>

                <router-link to="/resume" class="menu-link">
                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <i class="material-icons">list_alt</i>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title >Resume</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </router-link>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar fixed>
            <v-toolbar-side-icon class="hidden-md-and-up" @click="toggleSideNav()"></v-toolbar-side-icon>
            <v-toolbar-title>Edward Nguyen</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <router-link to="/" class="menu-link">
                    <v-btn flat>Home</v-btn>
                </router-link>
                <router-link to="/aboutMe" class="menu-link">
                    <v-btn flat>About Me</v-btn>
                </router-link>
                <router-link to="/resume" class="menu-link">
                    <v-btn flat>Resume</v-btn>
                </router-link>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                side_nav: false,
            }
        },
        methods: {
            toggleSideNav: function() {
                this.side_nav = !this.side_nav;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .menu-link {
        text-decoration: none;
        height: 100%;
        color: black;
    }
</style>
