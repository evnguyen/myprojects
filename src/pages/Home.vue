<template>
    <v-layout row wrap>
        <v-flex xs12>
            <v-card color="black" dark height="500" style="vertical-align: middle;">
                <div class="container">
                    <!--Maybe have this be different ways to say hello and have this auto slide/transition to the next one -->
                    <!--Use carousels? -->
                    <div class="display-4">Hello.</div>
                </div>
            </v-card>
        </v-flex>
        <v-flex xs12>
            <div style="margin: 5%">What this website is for?</div>
            <div style="margin: 5%" class="body-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet pretium augue, non dictum felis gravida id. Etiam sollicitudin, massa pulvinar ultricies pharetra, risus ex ornare est, eu blandit dolor nisi at lorem. Nam et rutrum nulla. Nulla at condimentum quam, non sodales velit. Mauris in eros luctus, fermentum arcu gravida, mollis quam. Donec tempus faucibus ipsum eget tristique. Aenean eu mattis justo. Ut convallis turpis et urna dictum aliquam. Aliquam maximus vehicula cursus. Nulla a massa ultrices felis blandit interdum. Nulla consequat felis eu justo fermentum, at molestie sem ullamcorper. Aliquam dictum enim quam, nec porttitor risus imperdiet gravida. Morbi vulputate sem ut vehicula accumsan. Sed accumsan mauris nec efficitur ultricies. Sed scelerisque porttitor efficitur.

                Aenean eu tortor molestie est laoreet condimentum in ut ipsum. In velit leo, volutpat a felis in, consectetur posuere lacus. Cras mollis faucibus gravida. Nullam quis ipsum nisl. Donec suscipit velit et ipsum tincidunt, a congue ex efficitur. Sed lacinia, urna at pharetra lacinia, dolor nibh cursus dolor, at egestas massa leo nec augue. Vivamus aliquet ultricies tincidunt. Integer malesuada diam velit. Suspendisse efficitur ante eget efficitur scelerisque.

                Integer ipsum diam, lacinia non ex in, cursus maximus nunc. Nulla molestie ipsum lacus, sit amet porta ipsum gravida ut. Cras sit amet blandit sem, suscipit egestas elit. Proin aliquam ante at nisl venenatis congue non ac augue. Sed sagittis magna quis est dictum volutpat. Vivamus rhoncus eleifend leo eget finibus. Integer ac feugiat est. Etiam nec ex efficitur elit placerat accumsan quis at neque. Vestibulum ac nisl tempor nisi pretium cursus et convallis enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras sit amet nisi commodo felis mollis volutpat. Integer bibendum odio vitae diam imperdiet convallis. Etiam tempus, leo ac sollicitudin gravida, velit libero consectetur enim, eu rhoncus felis massa in erat. Ut non magna vitae enim varius feugiat et eu augue. Etiam finibus congue sapien, nec volutpat diam.
            </div>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
    .container {
        height:100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>