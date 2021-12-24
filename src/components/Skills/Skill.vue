<template>
    <div class="skill">
        <div class="title">{{ title }}</div>
        <div class="description">{{ description }}</div>
        <div class="skill-line"></div>
    </div>
</template>

<script>
import { skillsSectionInterpolator } from "../interpolators";

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

<style lang="scss">
.skill {
    background-color: $backgroundColor-light;
    color: $black;
    min-width: 10vw;
    width: 100%;
    height: 100%;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: background 0.5s ease-in-out;

    .title {
        font-size: 2rem;
        margin: 1rem;
        animation: glow 1s ease-in-out infinite alternate;
    }

    .description {
        font-size: 0.6rem;
        margin: 1rem;
        margin-bottom: 4rem;
        text-shadow: 0 0 20px black;
    }

    .skill-line {
        padding-bottom: 1rem;
        width: 0.7rem;
        height: 0.1rem;
        margin-left: auto;
        background-color: $black;
        display: flex; /* defines flexbox */
        align-items: flex-end;
    }

    &:hover {
        transition: 0.5s cubic-bezier(0.81, 0.19, 1, 1);
        box-shadow: 0px 0px 50px -20px $black;
        transform: scale(1.05);
    }
}

.dark .skill {
    background-color: $black;
    color: $white;

    .title {
        animation: glowDark 1s ease-in-out infinite alternate;
    }

    .description {
        text-shadow: 0 0 20px $white;
    }
    .skill-line {
        background-color: $white;
    }
    &:hover {
        box-shadow: 0px 0px 50px -20px $white;
    }
}
@keyframes glow {
    from {
        text-shadow: 0 0 15px $black;
    }
    to {
        text-shadow: 0 0 5px $black;
    }
}
@keyframes glowDark {
    from {
        text-shadow: 0 0 20px $white;
    }
    to {
        text-shadow: 0 0 5px $white;
    }
}
</style>
