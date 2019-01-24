<!--TODO: Make the site responsive-->
<!--TODO: The overlay is on the middle box-->
<template>
    <v-layout row wrap>
        <v-flex xs12>
            <div style="">
                <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" height="600" class="parallax-overlay">
                    <v-card class="section-box" v-scroll-reveal.reset="{ easing: 'cubic-bezier(0.5, 0, 0, 1)'  }">
                        <v-layout align-center justify-center row wrap style="padding:2rem;">
                            <v-flex md4 class="display-3 text-xs-center" style="padding:0 2rem 0 2rem;">
                                ~ This is me ~
                            </v-flex>
                            <v-flex md8 class="subheading" style="padding: 2rem;">
                                My name is Edward Nguyen and I'm currently attending the University of Waterloo pursuing Computer Science as my major.
                                I hope to not only hone my skills as a programmer, but also learn how to apply and present my projects in the work force.
                                I've always loved helping others and I believe my career choice is the best way I can achieve this.
                            </v-flex>
                        </v-layout>
                    </v-card>
                </v-parallax>
            </div>
        </v-flex>

        <v-flex xs12>
            <div class="section-cw-skew">
                <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg" height="600" class="parallax-overlay">
                    <v-card class="section-box" v-scroll-reveal.reset="{ delay: 500, easing: 'cubic-bezier(0.5, 0, 0, 1)'  }">
                        <v-layout align-center justify-center row wrap style="padding:2rem;">
                            <v-flex md8 class="subheading" style="padding: 2rem;">
                                One of the main reasons for maintaining this website is to have a playground I can use whenever I learn
                                something new or a new idea comes to mind. That is, when inspiration comes, I have the ability to learn
                                and present it here on this domain. I became aware of the fundamentals of Web development back in high school.
                                I learned about the markup language, how to style a website, and was also inspired by past projects.
                                Back then, it was really inspiring know that art doesn't just come through pencil and paint, but it can
                                come through programming as well. Web development not only caters to artistic programmers, but it also
                                caters to those algorithmic-centered programmers on the server side.

                            </v-flex>
                            <v-flex md4 class="display-1 text-xs-center" style="padding:0 2rem 0 2rem;">
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
                    <v-card class="section-box" v-scroll-reveal.reset="{ easing: 'cubic-bezier(0.5, 0, 0, 1)'  }">
                        <v-layout align-center justify-center row wrap style="padding:2rem;">
                            <v-flex md4 class="display-1 text-xs-center" style="padding:0 2rem 0 2rem;">
                                ~ Android Development ~
                            </v-flex>
                            <v-flex md8 class="subheading" style="padding: 2rem;">
                                Android has always been my preferred mobile OS. I enjoyed having the flexibility as well as
                                the aesthetics of it. Getting my very first smartphone was an incredible experience.
                                Hearing about Flappy Birds success, I realized that even very simply apps can generate
                                enormous entertainment to people. This then lead me to pursue app development.
                                As I learn more about developing Android apps, I hope to continually document what
                                I have learned and what I have created during the process.
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
        name: "AboutMe"
    }
</script>

<style scoped>
    .section-cw-skew {
        -webkit-transform: skewY(5deg);
        -moz-transform: skewY(5deg);
        -ms-transform: skewY(5deg);
        -o-transform: skewY(5deg);
        transform: skewY(5deg);
        margin-top:-5%;
    }

    .section-cw-skew .section-box {
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

    .section-box {
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 10px;
        margin-bottom: 2rem;
        z-index: 3;
    }
</style>