(function(e){function t(t){for(var s,r,o=t[0],l=t[1],c=t[2],d=0,v=[];d<o.length;d++)r=o[d],i[r]&&v.push(i[r][0]),i[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);u&&u(t);while(v.length)v.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(s=!1)}s&&(n.splice(t--,1),e=r(r.s=a[0]))}return e}var s={},i={app:0},n=[];function r(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=s,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(a,s,function(t){return e[t]}.bind(null,s));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"033a":function(e,t,a){},"0583":function(e,t,a){"use strict";var s=a("7d8d"),i=a.n(s);i.a},"05e4":function(e,t,a){},"3ccf":function(e,t,a){},"4e83":function(e,t,a){"use strict";var s=a("033a"),i=a.n(s);i.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var s=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("Header"),a("router-view")],1)},n=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-navigation-drawer",{attrs:{fixed:"",temporary:""},model:{value:e.side_nav,callback:function(t){e.side_nav=t},expression:"side_nav"}},[a("v-list",{staticClass:"pa-1"},[a("v-list-tile",[a("v-list-tile-content",[a("v-list-tile-title",{staticClass:"title"},[e._v("Edward Nguyen")])],1)],1)],1),a("v-list",{staticClass:"pt-0",attrs:{dense:""}},[a("v-divider"),a("router-link",{staticClass:"menu-link",attrs:{to:"/"}},[a("v-list-tile",{on:{click:function(e){}}},[a("v-list-tile-action",[a("i",{staticClass:"material-icons"},[e._v("home")])]),a("v-list-tile-content",[a("v-list-tile-title",[e._v("Home")])],1)],1)],1),a("router-link",{staticClass:"menu-link",attrs:{to:"/AboutMe"}},[a("v-list-tile",{on:{click:function(e){}}},[a("v-list-tile-action",[a("i",{staticClass:"material-icons"},[e._v("person")])]),a("v-list-tile-content",[a("v-list-tile-title",[e._v("About Me")])],1)],1)],1),a("router-link",{staticClass:"menu-link",attrs:{to:"/resume"}},[a("v-list-tile",{on:{click:function(e){}}},[a("v-list-tile-action",[a("i",{staticClass:"material-icons"},[e._v("list_alt")])]),a("v-list-tile-content",[a("v-list-tile-title",[e._v("Resume")])],1)],1)],1)],1)],1),a("v-toolbar",{attrs:{fixed:""}},[a("v-toolbar-side-icon",{staticClass:"hidden-md-and-up",on:{click:function(t){e.toggleSideNav()}}}),a("v-toolbar-title",[e._v("Edward Nguyen")]),a("v-spacer"),a("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[a("router-link",{staticClass:"menu-link",attrs:{to:"/"}},[a("v-btn",{attrs:{flat:""}},[e._v("Home")])],1),a("router-link",{staticClass:"menu-link",attrs:{to:"/aboutMe"}},[a("v-btn",{attrs:{flat:""}},[e._v("About Me")])],1),a("router-link",{staticClass:"menu-link",attrs:{to:"/resume"}},[a("v-btn",{attrs:{flat:""}},[e._v("Resume")])],1)],1)],1)],1)},o=[],l={name:"Header",data:function(){return{side_nav:!1}},methods:{toggleSideNav:function(){this.side_nav=!this.side_nav}}},c=l,u=(a("bbf1"),a("2877")),d=Object(u["a"])(c,r,o,!1,null,"71f0c720",null);d.options.__file="Header.vue";var v=d.exports,m={name:"app",components:{Header:v}},p=m,h=Object(u["a"])(p,i,n,!1,null,null,null);h.options.__file="App.vue";var f=h.exports,b=a("ce5b"),g=a.n(b),y=a("8c4f"),_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card",{staticClass:"home-words",attrs:{color:"black",dark:"",height:"500"}},[a("div",{staticClass:"container"},[a("carousel-3d",{staticStyle:{"z-index":"1"},attrs:{space:"auto",width:"550",autoplay:!0}},e._l(e.greetings,function(t,s){return a("slide",{key:s,staticStyle:{background:"transparent"},attrs:{index:s}},[a("div",{staticClass:"container"},[a("span",{class:{"display-4":"xs"!==e.viewPort,"display-3":"xs"===e.viewPort}},[e._v(e._s(t)+".")])])])}),1)],1)])],1),a("v-flex",{attrs:{xs12:""}},[a("v-card",{staticClass:"section"},[a("div",{staticClass:"display-2 section-header"},[e._v("~ What this website is for? ~")]),a("div",{staticClass:"body-1 section-body"},[e._v("\n                The purpose of this is site is to showcase what a small sample of what I've learned in Vue.js.\n                The whole site should be considered a sandbox in terms of design and content. The website is hosted\n                on Github pages. Since the gh-pages branch holds the production version of the site,\n                if you would like to view the source code for the site, please go to the\n                "),a("a",{attrs:{href:"https://github.com/evnguyen/Website"}},[e._v("GitHub Repo")]),e._v(" and view the master branch.\n                I've published the development version of the site to make it easier to view how I made this website.\n            ")])])],1)],1)},w=[],x=(a("7f7f"),{name:"Home",data:function(){return{greetings:["Hello","Bonjour","Hola","Guten Tag","Konnichiwa","Nǐ hǎo"]}},computed:{viewPort:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"xs";case"sm":return"sm";case"md":return"md";case"lg":return"lg";case"xl":return"xl";default:return"xs"}}}}),C=x,k=(a("fa07"),Object(u["a"])(C,_,w,!1,null,"f2555c8a",null));k.options.__file="Home.vue";var S=k.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("div",[a("v-parallax",{staticClass:"parallax-overlay",attrs:{src:"https://cdn.vuetifyjs.com/images/parallax/material.jpg",height:"xs"===e.viewPort?900:600}},[a("v-card",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{easing:"cubic-bezier(0.5, 0, 0, 1)"},expression:"{ easing: 'cubic-bezier(0.5, 0, 0, 1)'  }",modifiers:{reset:!0}}],staticClass:"section__container"},[a("v-layout",{staticClass:"section__content",attrs:{"align-center":"","justify-center":"",row:"",wrap:""}},[a("v-flex",{staticClass:"display-3 text-xs-center section__header",attrs:{md4:""}},[e._v("\n                            ~ This is me ~\n                        ")]),a("v-flex",{staticClass:"subheading section__body",attrs:{md8:""}},[e._v("\n                            My name is Edward Nguyen and I have a bachelor's degree in computer science. I hope to\n                            continually strengthen my skills as a programmer while in the workforce. I would describe\n                            myself as someone who loves to learn and loves to help others. I believe programming is a\n                            field where you can never fully master. There are so many different languages, so many\n                            different libraries and frameworks to know. Being able to learn new things also assists\n                            me in helping others as well. The better I know ideas and concepts, the better I can help\n                            others. Thus I always strive to become a person whom people can rely on. It allows me to\n                            not only help others, but also reinforce and possibly strengthen the skills I possess.\n                        ")])],1)],1)],1)],1)]),a("v-flex",{attrs:{xs12:""}},[a("div",{staticClass:"section--right-skew"},[a("v-parallax",{staticClass:"parallax-overlay",attrs:{src:"https://cdn.vuetifyjs.com/images/parallax/material2.jpg",height:"xs"===e.viewPort?800:600}},[a("v-card",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{delay:500,easing:"cubic-bezier(0.5, 0, 0, 1)"},expression:"{ delay: 500, easing: 'cubic-bezier(0.5, 0, 0, 1)'  }",modifiers:{reset:!0}}],staticClass:"section__container section--left-skew"},[a("v-layout",{staticClass:"section__content",attrs:{"align-center":"","justify-center":"",row:"",wrap:""}},[a("v-flex",{staticClass:"subheading section__body",attrs:{md8:""}},[e._v("\n                            One of the main reasons for maintaining this website is to have a playground I can use\n                            whenever I learn something new or a new idea comes to mind. That is, when inspiration\n                            comes, I have the ability to learn and present it here on this domain. I became aware of\n                            the fundamentals of Web development back in high school. I learned about the markup\n                            language, how to style a website, and was also inspired by past projects. Back then,\n                            it was really inspiring know that art doesn't just come through pencil and paint, but\n                            it can come through programming as well. One aspect about web development that I truly\n                            love is that it not only caters to one's artistic side, but it also caters to one's\n                            technical side.\n\n                        ")]),a("v-flex",{staticClass:"display-1 text-xs-center section__header",attrs:{md4:""}},[e._v("\n                            ~ Web Development ~\n                        ")])],1)],1)],1)],1)]),a("v-flex",{attrs:{xs12:""}},[a("div",{staticStyle:{"margin-top":"-5%"}},[a("v-parallax",{staticClass:"parallax-overlay",attrs:{src:"https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",height:"600"}},[a("v-card",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",value:{easing:"cubic-bezier(0.5, 0, 0, 1)"},expression:"{ easing: 'cubic-bezier(0.5, 0, 0, 1)'  }",modifiers:{reset:!0}}],staticClass:"section__container"},[a("v-layout",{staticClass:"section__content",attrs:{"align-center":"","justify-center":"",row:"",wrap:""}},[a("v-flex",{staticClass:"display-1 text-xs-center section__header",attrs:{md4:""}},[e._v("\n                            ~ Work-life Balance ~\n                        ")]),a("v-flex",{staticClass:"subheading section__body",attrs:{md8:""}},[e._v("\n                            When I’m not tackling complex problems, you might find me in the gym or sitting back\n                            relaxing with my feet up enjoying the latest trendy TV show. I fundamentally believe\n                            that work-life balance is key to staying healthy and happy, thus I always strive to be\n                            in an environment where it can be maintained.\n                        ")])],1)],1)],1)],1)])],1)},I=[],P={name:"AboutMe",computed:{viewPort:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"xs";case"sm":return"sm";case"md":return"md";case"lg":return"lg";case"xl":return"xl";default:return"xs"}}}},T=P,M=(a("4e83"),Object(u["a"])(T,j,I,!1,null,"6ef6afa9",null));M.options.__file="AboutMe.vue";var O=M.exports,W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-parallax",{staticClass:"parallax-overlay",attrs:{src:"https://cdn.vuetifyjs.com/images/parallax/material.jpg",height:"100%"}},[a("v-layout",{staticStyle:{"margin-top":"6rem"},attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card",{staticClass:"section-card",staticStyle:{padding:"3rem"}},[a("div",{staticClass:"headline"},[e._v("SKILLS SUMMARY")]),a("v-divider",{staticStyle:{"margin-bottom":"1rem"}}),a("div",{staticClass:"subheading"},[a("b",[e._v("Languages")])]),a("ul",{staticClass:"subheading"},[a("li",[e._v("JavaScript, PHP, HTML5, CSS3, Java, C++")])]),a("br"),a("div",{staticClass:"subheading"},[a("b",[e._v("Frameworks/Libraries/Tools")])]),a("ul",{staticClass:"subheading"},[a("li",[e._v("Vue.js, Vuex, Vuetify, AngularJS, Drupal 7, Jest, Cypress, Git, JIRA")])]),a("br"),a("div",{staticClass:"subheading"},[a("b",[e._v("Databases")])]),a("ul",{staticClass:"subheading"},[a("li",[e._v("MySQL, Microsoft SQL server")])])],1)],1),a("v-flex",{staticStyle:{margin:"2rem 0 2rem 0"},attrs:{xs12:""}},[a("v-card",{staticClass:"section-card",staticStyle:{padding:"3rem"}},[a("div",{staticClass:"headline"},[e._v("Work Experience")]),a("v-divider",{staticStyle:{"margin-bottom":"1rem"}}),a("div",{staticClass:"subheading"},[a("b",[e._v("SSIMWAVE Inc. – Front-End Developer | May 2019 – August 2019")])]),a("ul",{staticClass:"subheading"},[a("li",[e._v("Collaborated with team to overhaul front-end from AngularJS to Vue.js")]),a("li",[e._v("Helped develop scheduling functionality in Vue.js and Express.js")]),a("li",[e._v("Tasked with trimming down bug related tickets in JIRA")]),a("li",[e._v("Wrote unit tests and end-to-end tests ")]),a("li",[e._v("Worked efficiently in an agile environment")])]),a("br"),a("div",{staticClass:"subheading"},[a("b",[e._v("University of Waterloo – Full Stack Developer | September 2018 – December 2018")])]),a("ul",{staticClass:"subheading"},[a("li",[e._v("Communicated with the co-op department to develop a paging widget")]),a("li",[e._v("Collaborated with team members to design and develop web pages in Vue.js using Vuex and Vuetify for Portal 2.0")]),a("li",[e._v("Implemented RESTful API’s using ASP.NET (C#)")]),a("li",[e._v("Wrote unit tests for Vue.js web pages ")]),a("li",[e._v("Developed a working prototype of an instant messaging widget for Portal 1.0 as an 80/20 project")])]),a("br"),a("div",{staticClass:"subheading"},[a("b",[e._v("University of Waterloo - Web Developer | May 2017 – May 2018")])]),a("ul",{staticClass:"subheading"},[a("li",[e._v("Responsible for creating a custom Drupal module to extend the current basic Web form functionality")]),a("li",[e._v("Tasked to continue the PHP-based part-time worker submission application")]),a("li",[e._v("Efficiently worked in both virtual and public development environments to ensure quality control")]),a("li",[e._v("Collaborated with other team members such as Senior Developers, Digital Designers, and Project Managers")])]),a("br")],1)],1),a("v-flex",{staticStyle:{margin:"2rem 0 2rem 0"},attrs:{xs12:""}},[a("v-card",{staticClass:"section-card",staticStyle:{padding:"3rem"}},[a("div",{staticClass:"headline"},[e._v("Education")]),a("v-divider",{staticStyle:{"margin-bottom":"1rem"}}),a("div",{staticClass:"subheading"},[e._v("Bachelor of Computer Science, Computer Science, University of Waterloo,\n                    Waterloo, Ontario, September 2014 – December 2019")])],1)],1),a("v-flex",{staticStyle:{margin:"2rem 0 2rem 0"},attrs:{xs12:""}},[a("v-card",{staticClass:"section-card",staticStyle:{padding:"3rem"}},[a("div",{staticClass:"headline"},[e._v("Projects")]),a("v-divider",{staticStyle:{"margin-bottom":"1rem"}}),a("div",{staticClass:"subheading"},[a("b",[e._v("Tunelight – HackConcordia2019")])]),a("ul",{staticClass:"subheading"},[a("li",[e._v("Generates the top 10 songs, genres or artists given a date range and location using TouchTunes’ API")]),a("li",[e._v("Tasked with building the front-end")]),a("li",[e._v("Spent 36 hours to learn React from scratch")])])],1)],1)],1)],1)},A=[],E={name:"Resume"},H=E,D=(a("0583"),Object(u["a"])(H,W,A,!1,null,"21fc2bfc",null));D.options.__file="Resume.vue";var V=D.exports,R=[{component:S,path:"/"},{component:O,path:"/aboutMe"},{component:V,path:"/resume"}],N=R,J=(a("bf40"),a("4c95")),$=a.n(J),z=a("3cf7"),L=a.n(z);s["default"].config.productionTip=!1,s["default"].use(g.a),s["default"].use(y["a"]),s["default"].use($.a),s["default"].use(L.a);var B=new y["a"]({routes:N});new s["default"]({render:function(e){return e(f)},router:B}).$mount("#app")},"7d8d":function(e,t,a){},bbf1:function(e,t,a){"use strict";var s=a("3ccf"),i=a.n(s);i.a},fa07:function(e,t,a){"use strict";var s=a("05e4"),i=a.n(s);i.a}});
//# sourceMappingURL=app.b4fdf661.js.map