<template>
    <section id="contact" ref="contactSection" class="contact">
        <div class="title-row">
            <div
                class="title"
                :style="contactSectionInterpolator.title(proportion)"
            >
                Get in touch
            </div>
        </div>
        <div class="list">
            <div class="contact">
                <a href="mailto:firzok.nadeem@gmail.com">Email</a>
            </div>

            <div class="contact">
                <a href="https://www.linkedin.com/in/firzok-nadeem/"
                    >LinkedIn</a
                >
            </div>

            <div class="contact">
                <a href="https://github.com/firzok">GitHub</a>
            </div>

            <div class="contact">
                <a href="https://www.facebook.com/Firzoknadeem">Facebook</a>
            </div>

            <div class="contact">
                <a href="https://www.instagram.com/ifirzok/">Instagram</a>
            </div>

            <div class="contact">
                <a href="https://twitter.com/Firzok">Twitter</a>
            </div>
        </div>
    </section>
</template>

<script>
import { contactSectionInterpolator } from "./interpolators";
export default {
    name: "contact",
    components: {},
    props: {
        proportion: { type: Number, default: 0 },
    },
    data() {
        return { contactSectionInterpolator };
    },
    setup() {},
    methods: {},
    watch: {},
};
</script>

<style scoped lang="scss">
a,
a:hover,
a:focus,
a:active {
    text-decoration: none;
    color: inherit;
}

.contact {
    color: white;

    .title-row {
        overflow: hidden;

        .title {
            font-size: 5rem;
            font-weight: bold;
            text-transform: uppercase;
        }
    }
    .list {
        margin-left: 5rem;
        .contact {
            font-size: 2rem;
            margin: 2rem;
        }
    }
}
</style>
