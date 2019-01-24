<template>
    <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" height="100%" class="parallax-overlay">
        <v-layout row wrap style="margin:6rem;">
            <v-flex xs12>
                <v-card style=" padding: 3rem;" class="section-card">
                    <div class="headline">Summary of Qualifications</div>
                    <v-divider style="margin-bottom: 1rem;"></v-divider>
                    <ul class="subheading">
                        <li>Object Oriented programming: Java, C, C++, C#</li>
                        <li>Web Development:  JavaScript, AngularJS, Vue.js, Vuex, ASP.NET, PHP, Drupal 7, Mocha, HTML, CSS</li>
                        <li>Databases: MySQL and Microsoft SQL Server </li>
                        <li>In-depth insight on the Model-View-Controller pattern</li>
                        <li>Experienced with Git, JIRA, and Agile/Scrum development</li>
                    </ul>
                </v-card>
            </v-flex>

            <v-flex xs12 style="margin: 2rem 0 2rem 0">
                <v-card style="padding: 3rem;" class="section-card">
                    <div class="headline">Work Experience</div>
                    <v-divider style="margin-bottom: 1rem;"></v-divider>
                    <div class="subheading"><b>University of Waterloo – Full Stack Developer | September 2018 – December 2018</b></div>
                    <ul class="subheading">
                        <li>Tasked with writing RESTful API’s using ASP.NET (C#) , Entity framework and MVC pattern</li>
                        <li>Responsible for developing and maintaining AngularJS web pages in Portal alongside other developers</li>
                        <li>Collaborated with team members to design and develop web pages in Vue.js with Vuex and Vuetify</li>
                        <li>Effectively worked with clients to obtain feedback and incorporate them</li>
                        <li>Tasked with writing unit tests for some of the Vue.js web pages</li>
                        <li>Developed a pre-alpha version of an instant messaging widget for Portal from scratch</li>
                    </ul>
                    <br>
                    <div class="subheading"><b>University of Waterloo - Web Developer |May 2017 – May 2018</b></div>
                    <ul class="subheading">
                        <li>Responsible for creating a custom Drupal module to extend the current basic Web form functionality</li>
                        <li>Tasked to continue the PHP-based part-time worker submission application</li>
                        <li>Efficiently worked in both virtual and public development environments to ensure quality control</li>
                        <li>Collaborated with other team members such as Senior Developers, Digital Designers, and Project Managers</li>
                    </ul>
                    <br>
                    <div class="subheading"><b>Validus Research Inc. - Quality Assurance Developer | September 2016 – December 2016</b></div>
                    <ul class="subheading">
                        <li>Responsible for managing User Request tickets and bug tickets in JIRA</li>
                        <li>Worked with other team members such as Developers, QA, and Project Coordinator to complete these User Requests</li>
                        <li>Performed Smoke Testing, Regression Testing, and writing test plans and test cases</li>
                        <li>Performed SQL search queries for database testing</li>
                    </ul>
                </v-card>
            </v-flex>

            <v-flex xs12 style="margin: 2rem 0 2rem 0">
                <v-card style=" padding: 3rem;" class="section-card">
                    <div class="headline">Education</div>
                    <v-divider style="margin-bottom: 1rem;"></v-divider>
                    <div class="subheading">Candidate for Bachelor of Computer Science, Computer Science, University of Waterloo,
                        Waterloo, Ontario, September 2014 – Present</div>
                </v-card>
            </v-flex>

            <v-flex xs12 style="margin: 2rem 0 2rem 0">
                <v-card style="padding: 3rem;" class="section-card">
                    <div class="headline">Projects</div>
                    <v-divider style="margin-bottom: 1rem;"></v-divider>

                    <div class="subheading"><b>Simon game – Android application</b></div>
                    <ul class="subheading">
                        <li>Mimics the original Simon game</li>
                        <li>Players can choose the game difficulty as well as the number of Simon buttons ranging from 1-6</li>
                        <li>Uses the MVC pattern for its core development</li>
                    </ul>
                    <br>
                    <div class="subheading"><b>Lunar Lander – Java Swing</b></div>
                    <ul class="subheading">
                        <li>Terrain editable version of the classic Lunar lander game</li>
                        <li>Contains a game screen and an edit screen where players can edit the terrain and undo/redo edits.</li>
                        <li>Developed using the MVC pattern</li>
                    </ul>
                    <br>
                    <div class="subheading"><b>HackHarvard</b></div>
                    <ul class="subheading">
                        <li>Developed an android application for lost and found pets in Kotlin using Firebase for data storage</li>
                        <li>Enables users to post a description of a sighted lost pet with its corresponding location in Google Maps</li>
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