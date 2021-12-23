<template>
    <section class="work">
        <div class="visible">
            <div class="position-line">
                <span class="position">
                    {{ position }}
                </span>
                <span class="seperator">at</span>
                <span class="company">
                    {{ company }}
                </span>
            </div>
            <div class="secondary-line">
                <span class="start">
                    {{ start }}
                </span>
                <span> - </span>
                <span class="end">
                    {{ end }}
                </span>
                <span class="seperator"> - </span>
                <span class="location">
                    {{ location }}
                </span>
            </div>
        </div>
        <div class="details">
            <span class="description" v-if="description.length > 1">
                As a {{ position }} at {{ company }}, my day to day tasks were:
                <span
                    v-for="(desc, idx) in description"
                    :key="idx"
                    class="lines"
                >
                    {{ idx + 1 }}. {{ desc }}
                </span>
            </span>
            <span class="description" v-if="description.length === 1">
                {{ description[0] }}
            </span>
        </div>
        <div class="accomplishments" v-if="accomplishment">
            <span class="description">
                Accomplishments:
                <span
                    v-for="(acc, idx) in accomplishment"
                    :key="idx"
                    class="lines"
                >
                    {{ idx + 1 }}. {{ acc }}
                </span>
            </span>
        </div>
        <div class="tools" v-if="toolsUsed">
            <span class="description">
                Tools and Technologies used:
                <span v-for="(tool, idx) in toolsUsed" :key="idx" class="lines">
                    {{ idx + 1 }}. {{ tool }}
                </span>
            </span>
        </div>
    </section>
</template>

<script>
export default {
    name: "work",
    components: {},
    props: {
        position: { type: String, default: "Position" },
        company: { type: String, default: "Company" },
        companyLink: { type: String, default: "/" },
        start: { type: String, default: "2019" },
        end: { type: String, default: "2020" },
        location: { type: String, default: "Location" },
        description: { type: () => [String], default: () => ["Description"] },
        accomplishment: { type: () => [String], default: undefined },
        toolsUsed: {
            type: () => [String],
            default: undefined,
            description: "Array of strings",
        },
        companyLogoPath: { type: String, default: undefined },
    },
    data() {},
    setup() {},
    methods: {},
    watch: {},
};
</script>

<style scoped lang="scss">
.work {
    color: white;
    background-color: $grey;
    padding: 1rem;
    .visible {
        text-transform: uppercase;
        .position-line {
            .position {
                font-size: 2rem;
            }

            .company {
                font-size: 2rem;
            }
        }
        .secondary-line {
            span {
                font-size: 1.2rem;
            }

            .location {
            }
        }

        .seperator {
            padding-left: 1rem;
            padding-right: 1rem;
            color: $lightGrey;
        }
    }

    .details {
        margin-top: 1rem;
        .description {
            display: flex;
            flex-direction: column;
            .lines {
                margin-left: 0.5rem;
            }
        }
    }

    .accomplishments {
        @extend .details;
    }
    .tools {
        @extend .details;
    }
}
</style>
