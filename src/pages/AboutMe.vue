<!--TODO: Make the site responsive-->
<!--TODO: The overlay is on the middle box-->
<template>
    <v-layout row wrap>
        <v-flex xs12>
            <div>
                <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" :height="viewPort === 'xs' ? 900 : 600" class="parallax-overlay">
                    <v-card class="section__container" v-scroll-reveal.reset="{ easing: 'cubic-bezier(0.5, 0, 0, 1)'  }">
                        <v-layout align-center justify-center row wrap class="section__content">
                            <v-flex md4 class="display-3 text-xs-center section__header">
                                ~ This is me ~
                            </v-flex>
                            <v-flex md8 class="subheading section__body">
                                My name is Edward Nguyen and I have a bachelor's degree in computer science. I hope to
                                continually strengthen my skills as a programmer while in the workforce. I would describe
                                myself as someone who loves to learn and loves to help others. I believe programming is a
                                field where you can never fully master. There are so many different languages, so many
                                different libraries and frameworks to know. Being able to learn new things also assists
                                me in helping others as well. The better I know ideas and concepts, the better I can help
                                others. Thus I always strive to become a person whom people can rely on. It allows me to
                                not only help others, but also reinforce and possibly strengthen the skills I possess.
                            </v-flex>
                        </v-layout>
                    </v-card>
                </v-parallax>
            </div>
        </v-flex>

        <v-flex xs12>
            <div class="section--right-skew">
                <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg" :height="viewPort === 'xs' ? 800 : 600" class="parallax-overlay">
                    <v-card class="section__container section--left-skew" v-scroll-reveal.reset="{ delay: 500, easing: 'cubic-bezier(0.5, 0, 0, 1)'  }">
                        <v-layout align-center justify-center row wrap class="section__content">
                            <v-flex md8 class="subheading section__body">
                                One of the main reasons for maintaining this website is to have a playground I can use
                                whenever I learn something new or a new idea comes to mind. That is, when inspiration
                                comes, I have the ability to learn and present it here on this domain. I became aware of
                                the fundamentals of Web development back in high school. I learned about the markup
                                language, how to style a website, and was also inspired by past projects. Back then,
                                it was really inspiring know that art doesn't just come through pencil and paint, but
                                it can come through programming as well. One aspect about web development that I truly
                                love is that it not only caters to one's artistic side, but it also caters to one's
                                technical side.

                            </v-flex>
                            <v-flex md4 class="display-1 text-xs-center section__header">
                                ~ Web Development ~
                            </v-flex>
                        </v-layout>
                    </v-card>
                </v-parallax>
            </div>
        </v-flex>

        <v-flex xs12>
            <div class="" style="margin-top:-5%">
                <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" height="600" class="parallax-overlay">
                    <v-card class="section__container" v-scroll-reveal.reset="{ easing: 'cubic-bezier(0.5, 0, 0, 1)'  }">
                        <v-layout align-center justify-center row wrap class="section__content">
                            <v-flex md4 class="display-1 text-xs-center section__header">
                                ~ Work-life Balance ~
                            </v-flex>
                            <v-flex md8 class="subheading section__body">
                                When I’m not tackling complex problems, you might find me in the gym or sitting back
                                relaxing with my feet up enjoying the latest trendy TV show. I fundamentally believe
                                that work-life balance is key to staying healthy and happy, thus I always strive to be
                                in an environment where it can be maintained.
                            </v-flex>
                        </v-layout>
                    </v-card>
                </v-parallax>
            </div>
        </v-flex>

    </v-layout>
</template>

<script>
    export default {
        name: "AboutMe",
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
    .section--right-skew:before {
        -webkit-transform: skewY(5deg);
        -moz-transform: skewY(5deg);
        -ms-transform: skewY(5deg);
        -o-transform: skewY(5deg);
        transform: skewY(5deg);
        margin-top:-5%;
    }

    .section--left-skew:before{
        -webkit-transform: skewY(-5deg);
        -moz-transform: skewY(-5deg);
        -ms-transform: skewY(-5deg);
        -o-transform: skewY(-5deg);
        transform: skewY(-5deg);
    }

    .parallax-overlay:before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #6d6d6d;
        opacity: 0.5;
        transition: all .3s linear;
        z-index: 2;
    }

    .section__container {
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 10px;
        margin-bottom: 2rem;
        z-index: 3;
        margin-top: 2rem;
    }

    .section__content {
        padding: 2rem;
    }

    .section__header {
        padding: 0 2rem 0 2rem;
    }

    .section__body {
        padding: 2rem;
    }
</style>