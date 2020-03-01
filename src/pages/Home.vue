<template>
    <v-layout row wrap>
        <v-flex xs12>
            <v-card color="black" dark height="500" class="home-words">
                <div class="container">
                    <carousel-3d style="z-index: 1;" space=auto width="550" :autoplay="true">
                        <slide v-for="(greeting, index) in greetings" :index="index" :key="index" style="background: transparent;">
                            <div class="container">
                                <span :class="{'display-4':viewPort !=='xs', 'display-3':viewPort ==='xs'}">{{greeting}}.</span>
                            </div>
                        </slide>
                    </carousel-3d>
                </div>
            </v-card>
        </v-flex>
        <v-flex xs12>
            <v-card class="section">
                <div class="display-2 section-header">~ What this website is for? ~</div>
                <div class="body-1 section-body">
                    The purpose of this is site is to showcase what a small sample of what I've learned in Vue.js.
                    The whole site should be considered a sandbox in terms of design and content. The website is hosted
                    on Github pages. Since the gh-pages branch holds the production version of the site,
                    if you would like to view the source code for the site, please go to the
                    <a href="https://github.com/evnguyen/Website">GitHub Repo</a> and view the master branch.
                    I've published the development version of the site to make it easier to view how I made this website.
                </div>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "Home",
        data(){
            return {
                greetings: ['Hello', 'Bonjour', 'Hola', 'Guten Tag', 'Konnichiwa', 'Nǐ hǎo']
            }
        },
        computed: {
            viewPort() {
                switch (this.$vuetify.breakpoint.name) {
                    case 'xs':
                        return 'xs';
                    case 'sm':
                        return 'sm';
                    case 'md':
                        return 'md';
                    case 'lg':
                        return 'lg';
                    case 'xl':
                        return 'xl';
                    default:
                        return'xs';
                }
            }
        },
    }
</script>

<style scoped>
    .container {
        height:100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .home-words:after {
        width: 100%;
        content: "";
        display: block;
        height: 50%;
        position: absolute;
        top: 65%;
        -webkit-transform: skewY(-4deg);
        -moz-transform: skewY(-4deg);
        -ms-transform: skewY(-4deg);
        -o-transform: skewY(-4deg);
        transform: skewY(-4deg);
        background-color: black;
        z-index: 0;
    }

    .section {
        margin: 10rem 5% 5% 5%;
        padding: 2rem;
        border-radius: 10px;
    }

    .section-header {
        margin: 5%;
        text-align: center;
    }

    .section-body {
        margin:5%;
    }

    .carousel-3d-slide.current {
        opacity: 1 !important;
    }
    .carousel-3d-slide {
        opacity: 0.2 !important;
    }
</style>