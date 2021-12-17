<template>
    <div class="sidebar">
        <img class="firzok" src="../assets/firzok.png" alt="Firzok" href="/" />
        <div class="links">
            <SidebarLink>Welcome</SidebarLink>
            <SidebarLink>Intro</SidebarLink>
            <SidebarLink>About</SidebarLink>
            <SidebarLink>Education</SidebarLink>
            <SidebarLink>Work Experience</SidebarLink>
            <SidebarLink>Contact</SidebarLink>
        </div>
    </div>
</template>

<script>
import SidebarLink from "./SidebarLink.vue";
export default {
    name: "Sidebar",
    components: { SidebarLink },
};
</script>

<style scoped lang="scss">
.sidebar {
    color: $white;
    background-color: $grey;

    max-width: 13vw;
    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 2.5vw;

    transition: 0.3s ease;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .firzok {
        width: 12vw;
        position: fixed;
        top: 2%;
        cursor: pointer;
    }
    .links {
    }
}
</style>
