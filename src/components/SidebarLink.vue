<template>
    <div class="link" :class="{ active: isActive }">
        <span>
            <slot />
        </span>
    </div>
</template>

<script>
export default {
    name: "SidebarLink",
    components: {},
};
</script>

<style lang="scss" scoped>
.link {
    :hover {
        color: $white;
        transition: 0.3s linear;
    }
    .active {
        font-size: 1.6rem;
        color: $white;
        transition: 0.3s linear;
    }

    font-size: 1.5rem;
    cursor: pointer;
    color: $lightGrey;
    justify-content: right;
    text-align: left;
}
.active {
    font-weight: bold;
}
</style> 