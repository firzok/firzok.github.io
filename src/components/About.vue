<template>
    <section id="about" ref="aboutSection" class="about">
        <div class="about-text">
            <span id="aboutText"></span>
            <div class="console-underscore" id="console">&#95;</div>
        </div>
    </section>
</template>

<script>
import { ref } from "vue";
import { secondSectionInterpolator } from "./interpolators";
import { useElementVisibility } from "@vueuse/core";

export default {
    name: "About",
    components: {},
    props: {
        proportion: { type: Number, default: 0 },
    },
    data() {
        return {
            secondSectionInterpolator,
            intervalId: 0,
            i: 0,
            txt: "I am a Software Engineer based in Germany.\
             National and international customers have relied\
              on me for the development, design, and management\
               of their digital products. I am currently pursuing\
                my Master's degree. My fast learning ability gives\
                 me an edge over my competition. I am known for\
                  thinking outside the box, resolving bottlenecks,\
                   and always delivering greater than expected. ",
        };
    },
    setup() {
        const aboutSection = ref(null);
        const aboutIsVisible = useElementVisibility(aboutSection);

        return { aboutSection, aboutIsVisible };
    },
    methods: {
        typeText() {
            if (this.i < this.txt.length) {
                document.getElementById("aboutText").innerHTML +=
                    this.txt.charAt(this.i);
            }
            this.i += 1;
        },
    },
    watch: {
        aboutIsVisible: function (visible) {
            if (visible & (this.intervalId === 0)) {
                let speed = 40; /* The speed/duration of the effect in milliseconds */

                this.intervalId = setInterval(() => this.typeText(), speed);
                setInterval(function () {
                    if (visible === true) {
                        document.getElementById("console").className =
                            "console-underscore hidden";
                        visible = false;
                    } else {
                        document.getElementById("console").className =
                            "console-underscore";

                        visible = true;
                    }
                }, 400);
            }
        },
    },
};
</script>

<style scoped lang="scss">
.about {
    .about-text {
        font-size: 2.5rem;
        text-align: left;

        margin: 0 1rem;

        .hidden {
            opacity: 0;
        }
        .console-underscore {
            display: inline-block;
            position: relative;
            top: -0.14em;
        }
    }
}
</style>
