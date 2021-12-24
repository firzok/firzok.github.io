<template>
    <section id="skills" ref="skillsSection" class="skills">
        <div class="title-row">
            <div
                class="title"
                :style="skillsSectionInterpolator.title(proportion)"
            >
                MY SKILLS
            </div>
            <div class="mini-text">
                These are just some of my most<br />
                significant skills
            </div>
        </div>
        <div class="skills-container">
            <Skill v-for="(skill, idx) in skills" v-bind="skill" :key="idx" />
        </div>
    </section>
</template>

<script>
// import { ref } from "vue";
import { skillsSectionInterpolator } from "../interpolators";
import Skill from "../Skills/Skill.vue";
// import { useElementVisibility } from "@vueuse/core";

export default {
    name: "Skills",
    components: { Skill },
    props: {
        proportion: { type: Number, default: 0 },
    },
    data() {
        return {
            skillsSectionInterpolator,
            skills: [
                {
                    title: "react.js",
                    description:
                        "I use react.js for web apps which require a lot of reactivity.",
                },
                {
                    title: "vue.js",
                    description:
                        "I use vue.js for the same as react but I love it more.",
                },
                {
                    title: "nuxt.js",
                    description:
                        "A vue.js framework for static site rendering.",
                },
                {
                    title: "javascript",
                    description:
                        "I use this to handle interactions and visual effects.",
                },
                {
                    title: "html/css",
                    description: "I use these to bring my designs to browser.",
                },
                {
                    title: "node.js",
                    description: "I use it for server apps and prototyping.",
                },
                {
                    title: "express",
                    description: "A framework for writing backend on node.js",
                },
                {
                    title: "python",
                    description:
                        "I use it for scripting and backend server apps.",
                },
                {
                    title: "c++",
                    description: "I use C++ for building backend libraries.",
                },
                {
                    title: "ux/ui",
                    description:
                        "It helps my designs be more meaningul and relevant.",
                },
                {
                    title: "photoshop",
                    description: "I use photoshop for photo editing.",
                },
                {
                    title: "lightroom",
                    description: "I use lightroom for photo editing too.",
                },
            ],
        };
    },
    setup() {
        // const skillsSection = ref(null);
        // const skillsIsVisible = useElementVisibility(skillsSection);
    },
    methods: {},
    watch: {},
};
</script>

<style scoped lang="scss">
.skills {
    .title-row {
        overflow: hidden;

        .title {
            font-size: 5rem;
            font-weight: bold;
            text-transform: uppercase;
        }
        .mini-text {
            font-size: 0.8rem;
            margin: 2rem 1rem;
            text-transform: uppercase;
        }
    }

    .skills-container {
        margin: 3rem 1rem;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 1rem;
        grid-row-gap: 3rem;
    }
}
</style>
