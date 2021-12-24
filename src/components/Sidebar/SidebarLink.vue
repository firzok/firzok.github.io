<template>
    <div class="link" :class="{ active: isActive() }">
        <a :href="`#${scrollTo}`">
            <slot />
        </a>
    </div>
</template>

<script>
export default {
    name: "SidebarLink",
    components: {},
    props: {
        scrollTo: {
            type: String,
            required: true,
            description: "id of the section to scroll to.",
        },
    },
    methods: {
        isActive() {
            let el = document.querySelector(`section[id="${this.scrollTo}"]`);

            if (!el) return false;
            let rect = el.getBoundingClientRect();
            console.log(
                rect &&
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <=
                        (window.innerHeight ||
                            document.documentElement
                                .clientHeight) /* or $(window).height() */ &&
                    rect.right <=
                        (window.innerWidth ||
                            document.documentElement.clientWidth)
            );
            return (
                rect &&
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <=
                    (window.innerHeight ||
                        document.documentElement
                            .clientHeight) /* or $(window).height() */ &&
                rect.right <=
                    (window.innerWidth ||
                        document.documentElement
                            .clientWidth) /* or $(window).width() */
            );
        },
    },
};
</script>

<style lang="scss" scoped>
.link {
    a,
    a:hover,
    a:focus,
    a:active {
        text-decoration: none;
        color: inherit;
    }
    &:hover {
        color: $white;
        transition: 0.3s linear;
    }

    font-size: 1.5rem;
    cursor: pointer;
    color: $white;
    justify-content: right;
    text-align: left;
}
.dark .link {
}
.link.active {
    color: $white;
    font-size: 1.6rem;
    transition: 0.3s linear;
}
</style> 