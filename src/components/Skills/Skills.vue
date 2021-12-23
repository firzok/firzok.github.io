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
            <Skill
                title="react.js"
                description="I use react.js for web apps which require a lot of reactivity."
            />
            <Skill
                title="vue.js"
                description="I use vue.js for the same as react but I love it more."
            />
            <Skill
                title="nuxt.js"
                description="A vue.js framework for static site rendering."
            />
            <Skill
                title="javascript"
                description="I use this to handle interactions and visual effects."
            />
            <Skill
                title="html/css"
                description="I use these to bring my designs to browser."
            />
            <Skill
                title="node.js"
                description="I use it for server apps and prototyping."
            />
            <Skill
                title="express"
                description="A framework for writing backend on node.js"
            />
            <Skill
                title="python"
                description="I use it for scripting and backend server apps."
            />
            <Skill
                title="c++"
                description="I use C++ for building fast libraries."
            />
            <Skill
                title="ux/ui"
                description="It helps my designs be more meaningul and relevant."
            />
            <Skill
                title="photoshop"
                description="I use photoshop for photo editing."
            />
            <Skill
                title="lightroom"
                description="I use lightroom for photo editing too."
            />
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
        return { skillsSectionInterpolator };
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
    color: white;
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
        margin: 5rem 4rem;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 1rem;
        grid-row-gap: 3rem;
    }
}
</style>
