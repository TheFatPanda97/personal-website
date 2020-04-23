<template>
    <v-app id="inspire">
        <v-app-bar app color="white">
            <v-tabs color="rgb(233, 171, 0)" centered show-arrows>
                <v-tab>Item One</v-tab>
                <v-tab>Item Two</v-tab>
                <v-tab>Item Three</v-tab>
            </v-tabs>
        </v-app-bar>

        <v-content>
            <intro></intro>
            <about-me></about-me>
        </v-content>
    </v-app>
</template>

<script>
import intro from "./components/intro"
import aboutMe from "./components/aboutMe"


export default {
    components: {
        intro,
        "about-me": aboutMe
    }
};
</script>
