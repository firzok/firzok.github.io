<template>
    <section id="education" ref="educationSection" class="education">
        <div class="title-row">
            <div
                class="title"
                :style="educationSectionInterpolator.title(proportion)"
            >
                My Education
            </div>
        </div>
        <div class="list">
            <div class="degree" ref="master" @mouseover="showMasters">
                <span class="title">Masters</span>
                <div class="details">
                    <div class="text-details">
                        <span class="name">Computer Science</span>
                        <span class="duration">2020 - Now</span>
                        <span class="specialisation"
                            >Specialisation 1: Software Engineering</span
                        >
                        <span class="specialisation"
                            >Specialisation 2: Network and Distributed
                            Systems</span
                        >
                    </div>
                    <div class="image">
                        <a href="https://www.uni-kl.de/" target="_blank">
                            <img src="@/assets/tukl.svg" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="degree right" ref="bachelor" @mouseover="showBachelors">
                <span class="title">Bachelors</span>
                <div class="details">
                    <div class="text-details">
                        <span class="name">Computer Science</span>
                        <span class="duration">2015 - 2019</span>
                        <span class="duration">CGPA: 3.49/4</span>
                    </div>
                    <div class="image">
                        <a href="http://nu.edu.pk/" target="_blank">
                            <img src="@/assets/nu.png" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { educationSectionInterpolator } from "./interpolators";
import { ref } from "vue";

export default {
    name: "Education",
    components: {},
    props: {
        proportion: { type: Number, default: 0 },
    },
    data() {
        return { educationSectionInterpolator };
    },
    setup() {
        const bachelor = ref(null);
        const master = ref(null);

        return { bachelor, master };
    },
    methods: {
        showBachelors() {
            this.bachelor.classList.add("degree-active");
        },
        showMasters() {
            this.master.classList.add("degree-active");
        },
    },
    watch: {},
};
</script>

<style scoped lang="scss">
.education {
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
        .degree {
            text-transform: uppercase;

            margin: 1rem 2rem;
            height: 12rem;
            width: 25rem;
            background-color: $grey;
            padding: 1rem;

            .title {
                font-size: 2.5rem;
                @keyframes glow-text {
                    from {
                        filter: drop-shadow(0px 0px 2px #fff);
                    }
                    to {
                        filter: drop-shadow(0px 0px 0px #fff);
                    }
                }
                animation: glow-text 1s ease-in-out infinite alternate;
            }

            .details {
                text-align: left;
                display: flex;
                flex-direction: row;
                opacity: 0;
                justify-content: space-between;
                margin-top: 1rem;

                & > .text-details {
                    span {
                        display: block;
                    }
                }

                & > .image {
                    display: flex;

                    img {
                        width: 20rem;
                        @keyframes glow {
                            from {
                                filter: drop-shadow(0px 0px 5px #000);
                            }
                            to {
                                filter: drop-shadow(0px 0px 0px #000);
                            }
                        }
                        animation: glow 1s ease-in-out infinite alternate;
                    }
                }
            }
        }

        .degree-active {
            @keyframes extend {
                0% {
                }
                100% {
                    width: 60rem;
                }
            }
            animation: extend 0.5s linear forwards;

            .details {
                @keyframes textFocus {
                    0% {
                        filter: blur(12px);
                        opacity: 0;
                    }
                    100% {
                        filter: blur(0px);
                        opacity: 1;
                    }
                }
                animation: textFocus 1s linear 0.2s forwards;
            }
        }

        .right {
            position: relative;
            margin-left: auto;
            margin-top: 5rem;
            text-align: right;
        }
    }
}
</style>
