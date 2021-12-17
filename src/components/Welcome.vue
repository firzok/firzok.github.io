<template>
    <div class="welcome">
        <div class="animated-title">
            <div class="text-top">
                <div :style="firstSectionInterpolator.topText(proportion)">
                    <span>Hi</span>
                    <span>I am Firzok</span>
                </div>
            </div>
            <div class="text-bottom">
                <div :style="firstSectionInterpolator.bottomText(proportion)">
                    Welcome to my world.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { firstSectionInterpolator } from "./interpolators";
export default {
    name: "Welcome",
    props: {
        proportion: { type: Number, default: 0 },
    },
    data() {
        return { firstSectionInterpolator };
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
    color: white;
    background-color: $black;

    height: 100vh;
    position: sticky;
    top: 0;
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
    color: $grey;
    height: 80vmin;
    left: 50%;
    position: relative;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 90vmin;
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
    border-bottom: 1vmin solid $white;
    top: 0;
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
