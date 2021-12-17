<template>
    <div ref="appRef" id="container" class="main">
        <div class="components">
            <div ref="welcomeRef" style="height: 6000px; position: relative">
                <Welcome :proportion="proportion" />
            </div>
            <div style="height: 6000px; position: relative">
                <Intro :proportion="proportion" />
            </div>
        </div>
    </div>
</template>

<script>
import Welcome from "./Welcome.vue";
import Intro from "./Intro.vue";
import { ref, onMounted, onUnmounted, provide } from "vue";

export default {
    name: "Main",
    components: {
        Intro,
        Welcome,
    },
    setup() {
        const appRef = ref(null);
        const welcomeRef = ref(null);

        const proportion = ref(0);

        function handleScroll() {
            const selfRect = appRef.value.getBoundingClientRect();
            const scrollComponent = welcomeRef.value.getBoundingClientRect();

            proportion.value =
                (window.scrollY - selfRect.y) / scrollComponent.height;

            console.log(proportion.value);
        }
        provide("proportion", proportion.value);

        onMounted(() => {
            document.addEventListener("scroll", handleScroll);
        });

        onUnmounted(() => {
            document.removeEventListener("scroll", handleScroll);
        });

        return {
            appRef,
            welcomeRef,
            proportion,
        };
    },
    methods: {},
};
</script>

<style scoped lang="scss">
.main {
    height: 100vh;
    margin-left: 18vw;

    .components {
        max-width: 1100px;
        margin: 0 auto;
    }
}
</style>
