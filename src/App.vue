<template>
    <v-app id="inspire">
        <v-app-bar app color="white">
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
                    <home></home>
                </div>
                <div id="about-me">
                    <div v-intersect.quiet="onIntersect"></div>
                    <about-me></about-me>
                </div>
            </v-responsive>
        </v-content>
        <v-footer
            flat
            tile
            class="indigo lighten-1 white--text text-center"
        >More content will be displayed here</v-footer>
    </v-app>
</template>

<script>
import home from "./components/home";
import aboutMe from "./components/aboutMe";

export default {
    data() {
        return {
            selectedTab: 0,
            tabs: [
                { id: "#home", name: "Home" },
                { id: "#about-me", name: "About Me" },
            ],
            options: {
                duration: 500,
                easing: "easeOutCubic",
            },
        };
    },
    components: {
        home,
        "about-me": aboutMe,
    },
    methods: {
        scrollTo(tabId) {
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
    },
};
</script>
