<template>
    <div ref="appRef" id="container" class="main">
        <div class="components">
            <div ref="welcomeRef" style="height: 6000px; position: relative">
                <Welcome :proportion="proportion" />
            </div>
            <div style="height: auto; position: relative">
                <Intro :proportion="proportion" />
            </div>
            <div style="height: 500px; position: relative">
                <About :proportion="proportion" />
            </div>
            <div style="height: 1100px; position: relative">
                <Skills :proportion="proportion" />
            </div>
            <div style="height: 2000px; position: relative">
                <Education :proportion="proportion" />
            </div>
        </div>
    </div>
</template>

<script>
import Welcome from "./Welcome.vue";
import Intro from "./Intro.vue";
import About from "./About.vue";
import Education from "./Education.vue";
import Skills from "./Skills/Skills.vue";
import { ref, onMounted, onUnmounted, provide } from "vue";

export default {
    name: "Main",
    components: {
        Skills,
        About,
        Intro,
        Welcome,
        Education,
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

            console.log("proportion", proportion.value);
        }
        provide("proportion", proportion.value);

        // function handleContentLoaded() {
        //     const observer = new IntersectionObserver((entries) => {
        //         entries.forEach((entry) => {
        //             const id = entry.target.getAttribute("id");
        //             console.log("intersection", entry.intersectionRatio);
        //             if (entry.intersectionRatio > 0) {
        //                 document
        //                     .querySelector(`nav div a[href="#${id}"]`)
        //                     .parentElement.classList.add("active");
        //             } else {
        //                 document
        //                     .querySelector(`nav div a[href="#${id}"]`)
        //                     .parentElement.classList.remove("active");
        //             }
        //         });
        //     });

        //     // Track all sections that have an `id` applied
        //     document.querySelectorAll("section[id]").forEach((section) => {
        //         observer.observe(section);
        //     });
        // }

        onMounted(() => {
            document.addEventListener("scroll", handleScroll);

            // document.addEventListener("DOMContentLoaded", handleContentLoaded);
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
        max-width: 100%;
        margin: 0 auto;
    }
}
</style>
