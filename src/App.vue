<template>
    <div class="app" :class="mode">
        <Sidebar @toggleTheme="toggleTheme" />
        <Main />
        <div class="cursor"></div>
    </div>
</template>

<script>
import Sidebar from "./components/Sidebar/Sidebar.vue";
import Main from "./components/Main.vue";
import { onMounted, onUnmounted } from "vue";

export default {
    name: "App",
    components: {
        Main,
        Sidebar,
    },
    data() {
        return { mode: "dark" };
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
    methods: {
        toggleTheme() {
            if (this.mode === "dark") {
                this.mode = "light";
            } else {
                this.mode = "dark";
            }
        },
    },
};
</script>

<style lang="scss">
* {
    cursor: none;
}

.app {
    scroll-behavior: smooth;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: $backgroundColor-light;
    color: $textColor-light;
    transition: background 0.5s ease-in-out;
}
.dark {
    background-color: $backgroundColor-dark;
    color: $textColor-dark;
}

body {
    margin: 0px;
    scroll-behavior: smooth;
}

.cursor {
    position: fixed;
    left: 0;
    top: 0;

    border: 1.5px solid $grey;
    background-color: $grey;
    box-shadow: 0 0 7px $grey;
    width: 7px;
    height: 7px;
    border-radius: 50px;
    z-index: 5;
    transform: translate(-50%, -50%);
    pointer-events: none;
    :hover {
        width: 9px;
        height: 9px;
    }
}
.dark > .cursor {
    border: 1.5px solid $lightGrey;
    background-color: $lightGrey;
    box-shadow: 0 0 7px $lightGrey;
}

@keyframes changebackgroundToWhite {
    0% {
        background-color: black;
    }
    100% {
        background-color: white;
    }
}
@keyframes changebackgroundToBlack {
    0% {
        background-color: white;
    }
    100% {
        background-color: black;
    }
}

.changebackgroundToWhiteClass {
    background-color: black;
    animation-name: changebackgroundToWhite;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    // animation-delay: 0.5s;
}

.changebackgroundToBlackClass {
    background-color: white;
    animation-name: changebackgroundToBlack;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    // animation-delay: 0.5s;
}
</style>
