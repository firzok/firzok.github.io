<template>
    <section id="work" ref="workSection" class="work"></section>
</template>

<script>
export default {
    name: "Work",
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
.about {
    color: white;

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
