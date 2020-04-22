<template>
    <v-app id="inspire">
        <v-app-bar app color="white">
            <v-tabs color="purple">
                <v-tab>Item One</v-tab>
                <v-tab>Item Two</v-tab>
                <v-tab>Item Three</v-tab>
            </v-tabs>
        </v-app-bar>

        <v-content>
            <v-parallax
                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                height="400"
            >
            </v-parallax>
            <v-parallax
                src="https://miro.medium.com/max/3622/1*RoXcbaF9lIqwpMjiXg54Vw.png"
                height="400"
            >
                <h1 class="text-center">
                    Scroll too see the parallax effect!
                </h1>
            </v-parallax>
        </v-content>
    </v-app>
</template>

<script>
export default {};
</script>

<style scoped>
#bg {
    max-width: 100%;
    max-height: 200;
    background: url(https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/dogs_1280p_0.jpg?itok=cnRk0HYq);
}
</style>
