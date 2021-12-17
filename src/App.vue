<template>
    <div>
        <Sidebar />
        <Main />
    </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import Main from "./components/Main.vue";

export default {
    name: "App",
    components: {
        Main,
        Sidebar,
    },

    methods: {},
};
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
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
</style>
