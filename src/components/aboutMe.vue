<template>
    <div class="about-page">
        <v-row>
            <v-col>
                <h1 class="about-title">About Me</h1>
            </v-col>
        </v-row>
        <v-row style="padding-right: 50px; padding-left: 50px">
            <v-col>
                <v-img
                    :src="require('../assets/about-me-photo.png')"
                    style="width: 300px; margin: auto;"
                ></v-img>
            </v-col>
            <v-col align-self="center">
                <p class="about-content">
                    Hi there, my name is Yingxiaoyang Hu, but you can call me
                    Shawn.

                    <br />
                    <br />

                    Who Am I?

                    <br />
                    <br />

                    Other than my name, I've been called many things, a dreamer,
                    an ambitious person, and most recently, an entrepreneur.
                    However, my proudest title would have to be a
                    <strong>problem solver</strong>. As a computer science
                    student at the University of Toronto, this could not have
                    been a better compliment.

                    <br />
                    <br />

                    The purpose of this website is to provide an overview of who
                    I am and what I have done. I will also be updating it with
                    new projects. Please feel free to explore and make any
                    suggestions you have.

                    <br />
                    <br />

                    Hopefully, my work will intrigue you. 😀
                </p>
            </v-col>
        </v-row>
    </div>
</template>

<style scoped>
.about-page {
    margin-top: 20px;
    margin-bottom: 20px;
}
.about-title {
    text-align: center;
    font-size: 50px;
    margin: 10px;
}
.about-content {
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    width: auto;
    min-width: 200px;
    word-wrap: break-word;
}
</style>
