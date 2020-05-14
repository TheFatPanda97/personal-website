<template>
    <v-app>
        <v-app-bar v-if="!dark" color="white" app hide-on-scroll>
            <v-tabs
                color="rgb(233, 171, 0)"
                centered
                show-arrows
                v-model="selectedTab"
            >
                <v-tab
                    v-for="tab in tabs"
                    :key="tab.id"
                    @click="scrollTo(tab.id)"
                >
                    {{ tab.name }}
                </v-tab>
            </v-tabs>
        </v-app-bar>

        <v-app-bar v-else app color="rgb(31,31,31)" hide-on-scroll dark>
            <v-tabs
                color="rgb(233, 171, 0)"
                centered
                show-arrows
                v-model="selectedTab"
            >
                <v-tab
                    v-for="tab in tabs"
                    :key="tab.id"
                    @click="scrollTo(tab.id)"
                >
                    {{ tab.name }}
                </v-tab>
            </v-tabs>
        </v-app-bar>

        <v-content>
            <v-responsive>
                <div id="home">
                    <div v-intersect.quiet="onIntersect"></div>
                    <home-view :viewWorkFn="scrollTo" :dark="dark"></home-view>
                </div>
                <div id="about-me">
                    <div v-intersect.quiet="onIntersect"></div>
                    <about-me-view :dark="dark"></about-me-view>
                </div>
                <div id="projects">
                    <div v-intersect.quiet="onIntersect"></div>
                    <projects-view :dark="dark"></projects-view>
                </div>
                <div id="contact-me">
                    <contact-me-view :dark="dark"></contact-me-view>
                </div>
            </v-responsive>
        </v-content>
        <v-footer flat tile padless app>
            <v-card
                flat
                tile
                width="100%"
                color="rgb(255, 187, 0)"
                class="text-center"
            >
                <v-card-text>
                    <v-btn
                        v-for="icon in icons"
                        :key="icon.name"
                        icon
                        class="mx-4"
                        color="black"
                        :href="icon.link"
                        target="_blank"
                    >
                        <v-icon large>{{ icon.name }}</v-icon>
                    </v-btn>
                    <v-btn
                        icon
                        class="mx-4"
                        color="black"
                        @click="toggleMode()"
                    >
                        <v-icon large>{{
                            !dark
                                ? "mdi-brightness-6"
                                : "mdi-brightness-4"
                        }}</v-icon>
                    </v-btn>
                </v-card-text>
            </v-card>
        </v-footer>
    </v-app>
</template>

<script>
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe"

export default {
    data() {
        return {
            selectedTab: 0,
            tabs: [
                { id: "#home", name: "Home" },
                { id: "#about-me", name: "About Me" },
                { id: "#projects", name: "Projects" },
                { id: "#contact-me", name: "Contact Me" },
            ],
            options: {
                duration: 500,
                easing: "easeOutCubic",
            },
            icons: [
                {
                    name: "mdi-github",
                    link: "https://github.com/TheFatPanda97",
                },
                {
                    name: "mdi-linkedin",
                    link: "https://www.linkedin.com/in/shawn-hu/",
                },
            ],
            dark: false,
        };
    },
    components: {
        "home-view": Home,
        "about-me-view": AboutMe,
        "projects-view": Projects,
        "contact-me-view": ContactMe,
    },
    methods: {

        scrollTo(tabId) {
            for (let i = 0; i < this.tabs.length; i++) {
                if (this.tabs[i].id == tabId) {
                    this.selectedTab = i;
                    break;
                }
            }
            this.$vuetify.goTo(tabId, this.options);
        },
        onIntersect(entries) {
            if (entries[0].isIntersecting) {
                let currID = "#" + entries[0].target.parentNode.id;
                for (let i = 0; i < this.tabs.length; i++) {
                    if (this.tabs[i].id == currID) {
                        this.selectedTab = i;
                        return;
                    }
                }
            }
        },
        toggleMode() {
            this.dark = !this.dark;
        },
    },
};
</script>
