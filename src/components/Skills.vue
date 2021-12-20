<template>
    <section id="skills" ref="skillsSection" class="skills">
        <div class="title">My Skills</div>
    </section>
</template>

<script>
// import { ref } from "vue";
// import { secondSectionInterpolator } from "./interpolators";
// import { useElementVisibility } from "@vueuse/core";

export default {
    name: "Skills",
    components: {},
    props: {
        proportion: { type: Number, default: 0 },
    },
    data() {
        return {};
    },
    setup() {},
    methods: {},
    watch: {},
};
</script>

<style scoped lang="scss">
.skills {
    color: black;
    .title {
        font-size: 5rem;
    }
}
</style>
