<template>
    <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" height="100%" class="parallax-overlay">
        <v-layout row wrap style="margin-top: 6rem;">
            <v-flex xs12>
                <v-card style="padding: 3rem;" class="section-card">
                    <div class="headline">SKILLS SUMMARY</div>
                    <v-divider style="margin-bottom: 1rem;"></v-divider>
                    <div class="subheading"><b>Languages</b></div>
                    <ul class="subheading">
                        <li>JavaScript, PHP, HTML5, CSS3</li>
                    </ul>
                    <br>
                    <div class="subheading"><b>Frameworks/Libraries/Tools</b></div>
                    <ul class="subheading">
                        <li>Vue.js, Vuex, Vuetify, AngularJS, Drupal 7, Jest, Cypress, Git, JIRA</li>
                    </ul>
                    <br>
                    <div class="subheading"><b>Databases</b></div>
                    <ul class="subheading">
                        <li>MySQL, Microsoft SQL server</li>
                    </ul>
                </v-card>
            </v-flex>

            <v-flex xs12 style="margin: 2rem 0 2rem 0">
                <v-card style="padding: 3rem;" class="section-card">
                    <div class="headline">Work Experience</div>
                    <v-divider style="margin-bottom: 1rem;"></v-divider>
                    <div class="subheading"><b>SSIMWAVE Inc. – Front-End Developer, Co-op | May 2019 – August 2019</b></div>
                    <ul class="subheading">
                        <li>Collaborated with team to overhaul front-end from AngularJS to Vue.js</li>
                        <li>Helped develop scheduling functionality in Vue.js and Express.js</li>
                        <li>Tasked with trimming down bug related tickets in JIRA</li>
                        <li>Wrote unit tests and end-to-end tests </li>
                        <li>Worked efficiently in an agile environment</li>
                    </ul>
                    <br>
                    <div class="subheading"><b>University of Waterloo – Full Stack Developer, Co-op | September 2018 – December 2018</b></div>
                    <ul class="subheading">
                        <li>Communicated with the co-op department to develop a paging widget</li>
                        <li>Collaborated with team members to design and develop web pages in Vue.js using Vuex and Vuetify for Portal 2.0</li>
                        <li>Implemented RESTful API’s using ASP.NET (C#)</li>
                        <li>Wrote unit tests for Vue.js web pages </li>
                        <li>Developed a working prototype of an instant messaging widget for Portal 1.0 as an 80/20 project</li>
                    </ul>
                    <br>
                    <div class="subheading"><b>University of Waterloo - Web Developer, Co-op | May 2017 – May 2018</b></div>
                    <ul class="subheading">
                        <li>Responsible for creating a custom Drupal module to extend the current basic Web form functionality</li>
                        <li>Tasked to continue the PHP-based part-time worker submission application</li>
                        <li>Efficiently worked in both virtual and public development environments to ensure quality control</li>
                        <li>Collaborated with other team members such as Senior Developers, Digital Designers, and Project Managers</li>
                    </ul>
                    <br>
                </v-card>
            </v-flex>

            <v-flex xs12 style="margin: 2rem 0 2rem 0">
                <v-card style=" padding: 3rem;" class="section-card">
                    <div class="headline">Education</div>
                    <v-divider style="margin-bottom: 1rem;"></v-divider>
                    <div class="subheading">Bachelor of Computer Science, Computer Science, University of Waterloo,
                        Waterloo, Ontario, September 2014 – December 2019</div>
                </v-card>
            </v-flex>

            <v-flex xs12 style="margin: 2rem 0 2rem 0">
                <v-card style="padding: 3rem;" class="section-card">
                    <div class="headline">Projects</div>
                    <v-divider style="margin-bottom: 1rem;"></v-divider>

                    <div class="subheading"><b>Tunelight – HackConcordia2019</b></div>
                    <ul class="subheading">
                        <li>Generates the top 10 songs, genres or artists given a date range and location using TouchTunes’ API</li>
                        <li>Tasked with building the front-end</li>
                        <li>Spent 36 hours to learn React from scratch</li>
                    </ul>
                </v-card>
            </v-flex>
        </v-layout>
    </v-parallax>
</template>

<script>
    export default {
        name: "Resume"
    }
</script>

<style scoped>
    .section-card {
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
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
</style>