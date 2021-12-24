<template>
    <!-- <div>
        <input
            @change="toggleTheme"
            id="checkbox"
            type="checkbox"
            class="switch-checkbox"
        />
        <label for="checkbox" class="switch-label">
            <div
                class="switch-toggle"
                :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"
            ></div>
        </label>
    </div> -->
    <div class="toggle-wrapper">
        <label class="toggle">
            <input
                type="checkbox"
                :checked="userTheme === 'dark-theme'"
                @change="$emit('toggle')"
            />
            <span class="toggler"> </span>
        </label>
    </div>
</template>

<script>
export default {
    mounted() {
        const initUserTheme = this.getMediaPreference();
        this.setTheme(initUserTheme);
    },

    data() {
        return {
            userTheme: "light-theme",
        };
    },

    methods: {
        toggleTheme() {
            const activeTheme = localStorage.getItem("user-theme");
            if (activeTheme === "light-theme") {
                this.setTheme("dark-theme");
            } else {
                this.setTheme("light-theme");
            }
        },

        setTheme(theme) {
            localStorage.setItem("user-theme", theme);
            this.userTheme = theme;
            document.documentElement.className = theme;
        },

        getMediaPreference() {
            const hasDarkPreference = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            if (hasDarkPreference) {
                return "dark-theme";
            } else {
                return "light-theme";
            }
        },
    },
};
</script>

<style scoped lang="scss">
.switch-checkbox {
    display: none;
}

.switch-label {
    align-items: center;
    border: calc(3rem * 0.025) solid $black;
    border-radius: 3rem;
    display: flex;
    font-size: calc(3rem * 0.3);
    height: calc(3rem * 0.35);
    position: relative;
    padding: calc(3rem * 0.1);
    transition: 0.5s ease;
    justify-content: space-between;
    width: 3rem;
    z-index: 1;
}

.switch-toggle {
    position: absolute;
    background-color: $black;
    border-radius: 50%;
    top: calc(3rem * 0.07);
    left: calc(3rem * 0.07);
    height: calc(3rem * 0.4);
    width: calc(3rem * 0.4);
    transform: translateX(0);
    transition: transform 0.3s ease, background-color 0.5s ease;
}

.switch-toggle-checked {
    transform: translateX(calc(3rem * 0.6)) !important;
}

.toggle {
    position: relative;
    display: inline-block;
    width: 56px;
    height: 30px;
    box-shadow: 0 0 2px $lightGrey;
}

.toggle input {
    opacity: 0;
    widows: 0;
    height: 0;
}

.toggler {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: $lightGrey;
    box-shadow: 0 0 4px $grey;
    transition: 0.4s;

    &:hover {
        box-shadow: 0 0 6px $grey;
    }

    &::before {
        position: absolute;
        content: "";
        height: 22px;
        width: 22px;
        left: 4px;
        bottom: 4px;
        background: #fff;
        transition: 0.4s;
    }
}
input:checked + .toggler {
    box-shadow: 0 0 4px $white;
    background: $grey;
    &:hover {
        box-shadow: 0 0 6px $white;
    }
}
input:checked + .toggler:before {
    transform: translateX(26px);
    background: #000;
}
</style>
