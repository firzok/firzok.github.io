<template>
    <div class="intro">
        <div class="animate">
            <div class="text-top">I build things to make life easier.</div>
            <div class="text-highlights">
                <div :style="secondSectionInterpolator.highlights(proportion)">
                    <span>Software Engineer</span>
                    <span>Developer</span>
                    <span>UX/UI Designer</span>
                    <span>Freelancer</span>
                    <span>Student</span>
                </div>
            </div>
            <!-- <div class="text-bottom">
            <div :style="secondSectionInterpolator.bottomText(proportion)">
                <span>
                    I am a Software Engineer based in Germany. National and
                    international customers have relied on me for development,
                    design, and management of their digital products. I also
                    work as a freelancer from time to time, I works also with
                    web agencies, companies, startups and individuals to create
                    a blueprint for the digital business.
                </span>
            </div>
        </div> -->
        </div>
    </div>
</template>

<script>
import { secondSectionInterpolator } from "./interpolators";

export default {
    name: "Intro",
    components: {},
    props: {
        proportion: { type: Number, default: 0 },
    },
    data() {
        return { secondSectionInterpolator };
    },
};
</script>

<style scoped lang="scss">
.intro {
    color: white;
    background-color: $black;

    height: 100vh;
    position: sticky;
    top: 0;
}

@keyframes showHighlights {
    0% {
        transform: translate3d(0, 120%, 0);
    }
    20% {
        transform: translate3d(0, 60%, 0);
    }
    40% {
        transform: translate3d(0, 20%, 0);
    }
    60% {
        transform: translate3d(0, -20%, 0);
    }
    80% {
        transform: translate3d(0, -60%, 0);
    }
    100% {
        transform: translate3d(0, -200%, 0);
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
    top: 50%;
    transform: translate(-50%, -50%);
    width: 90vmin;
}
.animate > .text-top {
    font-size: 5rem;
    text-align: left;
    border-bottom: 1vmin solid $white;
}
.animate > div {
    height: 50%;
    overflow: hidden;
    position: relative;
    width: 100%;
}
.animate > div div {
    font-size: 12vmin;
    padding: 2vmin 0;
    position: relative;
}
.animate > div div span {
    display: block;
}
.animate > div.text-highlights {
    bottom: 0;
}
.animate > div.text-highlights div {
    animation: showHighlights 2s linear;
    animation-play-state: paused;

    /* These last 2 properites clean up overshoot weirdness */
    animation-iteration-count: 1;
    animation-fill-mode: both;

    top: 0;
    transform: translate3d(0, 120%, 0);
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
