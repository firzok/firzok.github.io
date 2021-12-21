<template>
    <section id="intro" class="intro" ref="introChangeColor">
        <div class="animate">
            <div class="text-top">
                I build digital products to make life easier.
            </div>
            <div class="text-middle">I am a</div>
            <div class="text-highlights">
                <div>
                    <span class="highlight">Software Engineer</span>
                    <span>Developer</span>
                    <span>UX/UI Designer</span>
                    <span>Freelancer</span>
                    <span>Student</span>
                </div>
            </div>
            <img src="../assets/codeScreen1.png" alt="Coding screen" />
            <!-- <div class="text-bottom">
                <div>
                    <span>
                        I am a Software Engineer based in Germany. National and
                        international customers have relied on me for
                        development, design, and management of their digital
                        products. I also work as a freelancer from time to time,
                        I works also with web agencies, companies, startups and
                        individuals to create a blueprint for the digital
                        business.
                    </span>
                </div>
            </div> -->
        </div>
    </section>
</template>

<script>
import { secondSectionInterpolator } from "./interpolators";
import { ref, onMounted } from "vue";
import { useElementVisibility } from "@vueuse/core";

export default {
    name: "Intro",
    components: {},
    props: {
        proportion: { type: Number, default: 0 },
    },
    data() {
        return { secondSectionInterpolator };
    },

    setup() {
        const introChangeColor = ref(null);
        const introIsVisible = useElementVisibility(introChangeColor);
        // const changeBackground = (visible) => {
        //     document.body.classList.toggle(
        //         "changebackgroundToBlackClass",
        //         !visible
        //     );
        //     document.body.classList.toggle(
        //         "changebackgroundToWhiteClass",
        //         visible
        //     );
        // };

        const handleHighlightsAnimation = () => {
            console.log("introIsVisible", introIsVisible.value);
            const inViewport = (entries) => {
                entries.forEach((entry) => {
                    entry.target.classList.toggle(
                        "is-inViewport",
                        entry.isIntersecting
                    );
                });
            };

            const Obs = new IntersectionObserver(inViewport);
            const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options

            const highlighElement = document.querySelector(
                ".text-highlights > div"
            );
            Obs.observe(highlighElement, obsOptions);
        };

        onMounted(() => {
            document.addEventListener(
                "DOMContentLoaded",
                handleHighlightsAnimation
            );
        });

        // watch(() => introIsVisible.value, changeBackground);

        return { introChangeColor, introIsVisible, handleHighlightsAnimation };
    },
};
</script>

<style scoped lang="scss">
.intro {
    color: white;
    // background-color: white;

    height: 100vh;
    position: sticky;
    top: 0;
    padding: 5%;
    border-radius: 7px;

    img {
        width: 54rem;
        position: relative;
        opacity: 0.8;
        filter: drop-shadow(2px 4px 8px #000);
    }
}

@keyframes showHighlights {
    0% {
        // transform: translate3d(0, -100%, 0);
        bottom: 7em;
    }
    100% {
        // transform: translate3d(0, -20%, 0);
        bottom: 0.3em;
    }
}
@keyframes showBottomText {
    0% {
        transform: translate3d(0, -100%, 0);
    }
    100% {
        transform: translate3d(0, 0, 0);
    }
}
.animate {
    text-align: center;
    color: $white;
    height: 80vmin;
    left: 50%;
    position: relative;
    top: 40%;
    transform: translate(-50%, -50%);
}
.animate > .text-top {
    font-size: 5rem;
    text-align: left;
    margin-bottom: 13vh;
}
.animate > .text-middle {
    font-size: 4rem;
    text-align: right;
    margin-bottom: 5vh;
}
.animate > div {
    overflow: hidden;
    position: relative;
    width: 100%;
}
.animate > div div {
    font-size: 7rem;
    padding: 2vmin 0;
    position: relative;
}
.animate > div div span {
    display: block;
}
.animate > div.text-highlights {
    top: 0;
    height: 9rem;

    .highlight {
        background-color: $grey;
        color: #fff;
    }
}
.animate > div.text-highlights div {
    bottom: 7em;
}
.animate > div.text-highlights div.is-inViewport {
    animation: showHighlights 3s cubic-bezier(0, 0, 0.48, 1.1);
    animation-fill-mode: forwards;
    animation-delay: 2s;
}

.animate > div.text-bottom {
    bottom: 0;
}

.animate > div.text-bottom div {
    animation: showBottomText 0.5s linear;
    animation-play-state: paused;

    animation-iteration-count: 1;
    animation-fill-mode: both;

    top: 0;
    transform: translate(0, -100%);
}
</style>
