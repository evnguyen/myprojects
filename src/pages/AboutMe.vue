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
                                ~ This is me. ~
                            </v-flex>
                            <v-flex md8>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor tellus ullamcorper, maximus eros eleifend, tincidunt diam. Fusce ultrices efficitur facilisis. Sed porta finibus nibh ac accumsan. Ut varius vestibulum sapien, at porta mi tempor tempor. Vivamus nec leo vel erat luctus maximus. Nulla sed blandit enim. Donec sagittis risus in consectetur molestie. Sed convallis turpis id felis molestie pellentesque. Integer laoreet eros nec est laoreet iaculis. Donec at tellus felis. Curabitur tincidunt nunc et commodo tincidunt.
                            </v-flex>
                        </v-layout>
                    </v-card>
                </v-parallax>
            </div>
        </v-flex>

        <v-flex xs12>
            <div class="section-cw-skew">
                <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg" height="550" class="parallax-overlay">
                    <v-card class="section-box" v-scroll-reveal.reset="{ delay: 500, easing: 'cubic-bezier(0.5, 0, 0, 1)'  }">
                        <v-layout align-center justify-center row wrap style="padding:2rem;">
                            <v-flex md8>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor tellus ullamcorper, maximus eros eleifend, tincidunt diam. Fusce ultrices efficitur facilisis. Sed porta finibus nibh ac accumsan. Ut varius vestibulum sapien, at porta mi tempor tempor. Vivamus nec leo vel erat luctus maximus. Nulla sed blandit enim. Donec sagittis risus in consectetur molestie. Sed convallis turpis id felis molestie pellentesque. Integer laoreet eros nec est laoreet iaculis. Donec at tellus felis. Curabitur tincidunt nunc et commodo
                                Donec eget ornare turpis, non molestie neque. Nunc risus orci, dignissim viverra auctor sit amet, iaculis a tortor. Integer condimentum feugiat mollis. Morbi placerat dolor accumsan imperdiet malesuada. Nullam quis facilisis eros. Suspendisse dignissim est ligula, eu aliquam est rutrum vitae. Mauris at turpis tincidunt, porta libero vel, accumsan eros. Cras in tempus leo. Donec turpis orci, eleifend vel semper eu, pretium nec est. Morbi dictum ante felis, vel dictum dolor rhoncus at.
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
                <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" height="550" class="parallax-overlay">
                    <v-card class="section-box" v-scroll-reveal.reset="{ easing: 'cubic-bezier(0.5, 0, 0, 1)'  }">
                        <v-layout align-center justify-center row wrap style="padding:2rem;">
                            <v-flex md4 class="display-1 text-xs-center" style="padding:0 2rem 0 2rem;">
                                ~ Android Development ~
                            </v-flex>
                            <v-flex md8>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor tellus ullamcorper, maximus eros eleifend, tincidunt diam. Fusce ultrices efficitur facilisis. Sed porta finibus nibh ac accumsan. Ut varius vestibulum sapien, at porta mi tempor tempor. Vivamus nec leo vel erat luctus maximus. Nulla sed blandit enim. Donec sagittis risus in consectetur molestie. Sed convallis turpis id felis molestie pellentesque. Integer laoreet eros nec est laoreet iaculis. Donec at tellus felis. Curabitur tincidunt nunc et commodo
                                Donec eget ornare turpis, non molestie neque. Nunc risus orci, dignissim viverra auctor sit amet, iaculis a tortor. Integer condimentum feugiat mollis. Morbi placerat dolor accumsan imperdiet malesuada. Nullam quis facilisis eros. Suspendisse dignissim est ligula, eu aliquam est rutrum vitae. Mauris at turpis tincidunt, porta libero vel, accumsan eros. Cras in tempus leo. Donec turpis orci, eleifend vel semper eu, pretium nec est. Morbi dictum ante felis, vel dictum dolor rhoncus at.
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
        background-color: #515151;
        opacity: 0.8;
        transition: all .3s linear;
        z-index: 2;
    }

    .section-box {
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 10px;
        margin-top:2rem;
        margin-bottom: 2rem;
    }
</style>