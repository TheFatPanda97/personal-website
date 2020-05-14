<template>
    <v-container
        fluid
        :class="dark == false ? 'about-page-light' : 'about-page-dark'"
    >
        <v-row>
            <v-col>
                <h1
                    :class="
                        dark == false ? 'about-title-light' : 'about-title-dark'
                    "
                >
                    About Me
                </h1>
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
                <p
                    :class="
                        dark == false
                            ? 'about-content-light'
                            : 'about-content-dark'
                    "
                >
                    Hi there, my name is Yingxiaoyang Hu, but you can call me
                    Shawn.

                    <br />
                    <br />

                    Who Am I?

                    <br />
                    <br />

                    Other than my name, I've been called many other things, a
                    dreamer, an ambitious person, and most recently, an
                    entrepreneur. However, my proudest title would have to be a
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
    </v-container>
</template>

<script>
export default {
    props: {
        dark: Boolean,
    },
};
</script>

<style scoped>
.about-page-dark {
    padding: 20px;
    padding-bottom: 20px;
    background-color: rgb(18, 18, 18);
}
.about-page-light {
    padding: 20px;
    padding-bottom: 20px;
    background-color: white;
}
.about-title-dark {
    text-align: center;
    font-size: 50px;
    margin: 10px;
    color: white;
}
.about-title-light {
    text-align: center;
    font-size: 50px;
    margin: 10px;
}
.about-content-dark {
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    width: auto;
    min-width: 200px;
    word-wrap: break-word;
    color: white;
}
.about-content-light {
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    width: auto;
    min-width: 200px;
    word-wrap: break-word;
}
</style>
