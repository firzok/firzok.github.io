<template>
    <div class="skill">
        <div class="title">{{ title }}</div>
        <div class="description">{{ description }}</div>
        <div class="skill-line"></div>
    </div>
</template>

<script>
import { skillsSectionInterpolator } from "./interpolators";

export default {
    name: "Skill",
    components: {},
    props: {
        proportion: { type: Number, default: 0 },
        title: { type: String, default: "Skill" },
        description: { type: String, default: "Description" },
    },
    data() {
        return { skillsSectionInterpolator };
    },
    setup() {},
    methods: {},
    watch: {},
};
</script>

<style scoped lang="scss">
.skill {
    background-color: $black;
    min-width: 10vw;
    width: 100%;
    height: 100%;

    .title {
        font-size: 2rem;
        text-transform: uppercase;
        margin: 1rem;
        animation: glow 1s ease-in-out infinite alternate;
    }
    @keyframes glow {
        from {
            text-shadow: 0 0 20px white;
        }
        to {
            text-shadow: 0 0 5px white;
        }
    }

    .description {
        font-size: 0.6rem;
        margin: 1rem;
        margin-bottom: 4rem;
        text-transform: uppercase;
        text-shadow: 0 0 20px white;
        transition: text-shadow 0.5s ease-in-out;
    }

    .skill-line {
        padding-bottom: 1vw;
        width: 0.7vw;
        height: 0.1vw;
        margin-left: auto;
        background-color: white;
    }

    &:hover {
        transition: 0.5s cubic-bezier(0.81, 0.19, 1, 1);
        box-shadow: 0px 0px 50px -20px $white;
        transform: scale(1.05);
    }
}
@keyframes pulsate {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
    50% {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}
</style>
