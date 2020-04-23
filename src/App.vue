<template>
    <v-app id="inspire">
        <v-app-bar app color="white">
            <v-tabs color="rgb(233, 171, 0)" centered show-arrows>
                <v-tab v-for="tabName in tabs" :key="tabName">
                    {{ tabName }}
                </v-tab>
            </v-tabs>
        </v-app-bar>

        <v-content>
            <home id="home"></home>
            <about-me id="about-me"></about-me>
        </v-content>
    </v-app>
</template>

<script>
import home from "./components/home";
import aboutMe from "./components/aboutMe";

export default {
    data() {
        return {
            tabs: ["Home", "About Me", "About Me", "About Me", "About Me", "About Me", "About Me"],
        };
    },
    components: {
        home,
        "about-me": aboutMe,
    },
};
</script>
