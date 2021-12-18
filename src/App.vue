<template>
    <div>
        <Sidebar />
        <Main />
        <div class="cursor"></div>
    </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import Main from "./components/Main.vue";
import { onMounted, onUnmounted } from "vue";

export default {
    name: "App",
    components: {
        Main,
        Sidebar,
    },
    setup() {
        const handleMouseMove = (evt) => {
            let cursor = document.querySelector(".cursor");

            cursor.style.top = evt.clientY + "px";
            cursor.style.left = evt.clientX + "px";
        };

        onMounted(() => {
            document.addEventListener("mousemove", handleMouseMove);
        });

        onUnmounted(() => {
            document.removeEventListener("mousemove", handleMouseMove);
        });

        return {
            handleMouseMove,
        };
    },
    methods: {},
};
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    cursor: none;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
body {
    margin: 0px;
    background-color: $black;
}

.cursor {
    position: fixed;
    left: 0;
    top: 0;
    border: 1.5px solid $accentColor;
    background-color: $accentColor;
    box-shadow: 0 0 7px $accentColor;
    width: 7px;
    height: 7px;
    border-radius: 50px;
    z-index: 5;
    transform: translate(-50%, -50%);
    pointer-events: none;
}
</style>
