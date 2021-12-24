<template>
    <section id="welcome" class="welcome" ref="welcomeColorChange">
        <div class="animated-title">
            <div class="text-top">
                <div :style="welcomeSectionInterpolator.topText(proportion)">
                    <span>Hi</span>
                    <span>I am Firzok</span>
                </div>
            </div>
            <div class="text-bottom">
                <div :style="welcomeSectionInterpolator.bottomText(proportion)">
                    Welcome to my world.
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { welcomeSectionInterpolator } from "./interpolators";
import { onMounted, ref } from "vue";
import { useElementVisibility } from "@vueuse/core";

export default {
    name: "Welcome",
    props: {
        proportion: { type: Number, default: 0 },
    },
    data() {
        return { welcomeSectionInterpolator };
    },
    setup() {
        const welcomeColorChange = ref(null);
        const welcomeIsVisible = useElementVisibility(welcomeColorChange);
        // const changeBackground = (visible) => {
        //     document.body.classList.toggle(
        //         "changebackgroundToWhiteClass",
        //         !visible
        //     );
        //     document.body.classList.toggle(
        //         "changebackgroundToBlackClass",
        //         visible
        //     );
        // };

        // watch(() => welcomeIsVisible.value, changeBackground);

        const handleContentLoaded = () => {
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
            document.addEventListener("DOMContentLoaded", handleContentLoaded);
        });

        return { welcomeColorChange, welcomeIsVisible, handleContentLoaded };
    },
    methods: {
        checkActive(proportion, lower, upper) {
            return proportion > lower && proportion < upper;
        },
    },
};
</script>

<style scoped lang="scss">
.welcome {
    height: 100vh;
    position: sticky;
    top: 0;
    padding: 5%;
}

@keyframes showTopText {
    0% {
        transform: translate3d(0, 100%, 0);
    }
    50% {
        transform: translate3d(0, 50%, 0);
        opacity: 1;
    }
    80% {
        transform: translate3d(0, 20%, 0);
    }
    90% {
        transform: translate3d(0, 0, 0);
    }
    100% {
        transform: translate3d(-5%, 0, 0) scale(1.1);
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
.animated-title {
    text-align: right;
    color: $lightGrey;
    height: 80vmin;
    left: 50%;
    position: relative;
    top: 50%;
    transform: translate(-50%, -50%);
}
.animated-title > div {
    height: 50%;
    overflow: hidden;
    position: relative;
    width: 100%;
}
.animated-title > div div {
    font-size: 12vmin;
    padding: 2vmin 0;
    position: relative;
}
.animated-title > div div span {
    display: block;
}
.animated-title > div.text-top {
    border-bottom: 1vmin solid $grey;
    top: 0;
}
.dark .animated-title > div.text-top {
    border-bottom: 1vmin solid $white;
}
.animated-title > div.text-top div {
    animation: showTopText 1.5s linear;
    animation-play-state: paused;

    /* These last 2 properites clean up overshoot weirdness */
    animation-iteration-count: 1;
    animation-fill-mode: both;

    bottom: 0;
    transform: translate(0, 100%);
}
.animated-title > div.text-top div span:last-child {
    color: $grey;
}
.dark .animated-title > div.text-top div span:last-child {
    color: $white;
}
.animated-title > div.text-bottom {
    bottom: 0;
}

.animated-title > div.text-bottom div {
    animation: showBottomText 0.5s linear;
    animation-play-state: paused;

    animation-iteration-count: 1;
    animation-fill-mode: both;

    top: 0;
    transform: translate(0, -100%);
}
</style>
