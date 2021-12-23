<template>
    <section
        id="workExperience"
        ref="workExperienceSection"
        class="workExperience"
    >
        <div class="title-row">
            <div
                class="title"
                :style="educationSectionInterpolator.title(proportion)"
            >
                Work Experience
            </div>
        </div>
        <div class="list">
            <Work
                class="work"
                v-for="ex in workExperiences"
                v-bind="ex"
                :key="ex.id"
            />
        </div>
    </section>
</template>

<script>
import { educationSectionInterpolator } from "../interpolators";
import Work from "./Work";
export default {
    name: "workExperience",
    components: { Work },
    props: {
        proportion: { type: Number, default: 0 },
    },
    data() {
        return {
            educationSectionInterpolator,
            workExperiences: [
                {
                    id: 1,
                    position: "Software Engineer",
                    company: "Proto",
                    companyLink: "https://www.proto.cx/",
                    start: "09.2020",
                    end: "09.2021",
                    location: "Remote/Canada",
                    description: [
                        "Developing frontend components for Proto using Vue.",
                        "Writing unit tests for Frontend components using Jest.",
                        "Backend development using Python.",
                    ],
                    accomplishment: [
                        "Achieved ~80% reduction in website loading by optimizing code.",
                    ],
                    toolsUsed: ["Vue.js", "Jest", "Python", "Gitlab", "Docker"],
                },
                {
                    id: 2,
                    position: "Software Engineer",
                    company: "Automotive Artificial Intelligence",
                    companyLink: "https://www.automotive-ai.com/",
                    start: "07.2019",
                    end: "09.2020",
                    location: "Islamabad, Pakistan",
                    description: [
                        "Creating reusable components using Vue.",
                        "Integrate new 3D objects in the Analyzer e.g Cars or Trucks using Three.js.",
                        "Writing test cases for frontend using Jest.",
                        "Creating microservices using Python.",
                        "Writing Frontend components for the product using React.",
                    ],
                    accomplishment: [
                        "Optimized and refactored the codebase and achieved ~20% overall improvement.",
                    ],
                    toolsUsed: [
                        "Vue.js",
                        "React",
                        "Python",
                        "C++",
                        "GitHub",
                        "Docker",
                        "AWS",
                    ],
                },
                {
                    id: 3,
                    position: "Software Engineer Intern",
                    company: "Automotive Artificial Intelligence",
                    companyLink: "https://www.automotive-ai.com/",
                    start: "01.2019",
                    end: "02.2019",
                    location: "Islamabad, Pakistan",
                    description: [
                        "At AAI I was part of the Platform Developer Team. Here, I along with a team of 5 other interns successfully developed a Rule-based Traffic Simulator for self-driving cars.",
                    ],
                    accomplishment: [
                        "Developed a renderer on PyGame in Python",
                        "Developed a Rule-based Traffic Simulator using Python",
                    ],
                    toolsUsed: ["Python", "C++", "PyGame", "GitHub"],
                },
                {
                    id: 4,
                    position: "Software Engineer Intern",
                    company: "Bentley Systems",
                    companyLink: "https://www.bentley.com/",
                    start: "06.2018",
                    end: "08.2018",
                    location: "Islamabad, Pakistan",
                    description: [
                        "At AAI I was part of the iModel JS Team. Here I was assigned to work on Microsoft Rush.",
                    ],
                    accomplishment: [
                        "Integrated Microsoft Rush as a Package Manager for Node Applications in the iModel JS team.",
                        "Wrote Python automation scripts that generated Graphs based on the tests entered and passed by different developers.",
                    ],
                    toolsUsed: ["Python", "Javascript", "Node", "GitHub"],
                },
            ],
        };
    },
    setup() {},
    methods: {},
    watch: {},
};
</script>

<style scoped lang="scss">
.workExperience {
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
        margin-left: 15rem;
        .work {
            margin: 2rem;
        }
    }
}
</style>
