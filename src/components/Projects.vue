<template>
    <v-container fluid class="projects-page">
        <v-row>
            <v-col>
                <h1 class="projects-title">Projects</h1>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col
                v-for="currCardInfo in allCardInfo"
                :key="currCardInfo.title"
                xs="1"
                sm="5"
                md="6"
                lg="4"
                xl="9"
            >
                <project-card :cardInfo="currCardInfo"></project-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ProjectCard from "./ProjectCard";

export default {
    data() {
        return {
            allCardInfo: [
                {
                    title: "UofT Course Tools",
                    description:
                        "We are unifying UofT's course data, and using it to build tools such as a course guide and timetable planner.",
                    imgSrc:
                        "https://raw.githubusercontent.com/UTM-Hacklab/UofTCourseTools/master/packages/docs/course-guide/figma_pic.png",
                    repoLink: "https://github.com/UTM-Hacklab/UofTCourseTools",
                },
                {
                    title: "Shawn's Portfolio",
                    description:
                        "The repository that contains the source file I used to build this website. He didn't use webflow or wix? What is he, insane?",
                    imgSrc:
                        "https://raw.githubusercontent.com/TheFatPanda97/personal-website/master/src/assets/intro-background.png",
                    repoLink:
                        "https://github.com/TheFatPanda97/personal-website",
                },
                {
                    title: "Flappy Bird",
                    description:
                        "You may be thinking, why is this ugly thing on the website? But get this, I made it in assembly. 🤪",
                    imgSrc:
                        "https://raw.githubusercontent.com/TheFatPanda97/flappybird/master/gameplay.PNG",
                    repoLink: "https://github.com/TheFatPanda97/flappybird",
                },
                {
                    title: "Isomo",
                    description:
                        "A startup aiming to eliminate the biases (e.g. race, gender) in the hiring process. On this platform, only your skills matter.",
                    imgSrc:
                        "https://raw.githubusercontent.com/TheFatPanda97/personal-website/master/src/assets/network.jpg",
                    repoLink: "https://github.com/TheFatPanda97/isomo",
                },
                {
                    title: "Fight Club",
                    description:
                        "Do you love Naruto and Mortal Kombat? Well this is a fighting game where Anime characters fight each other.",
                    imgSrc:
                        "https://raw.githubusercontent.com/TheFatPanda97/Fight-Club/master/main-menu.PNG",
                    repoLink:
                        "https://github.com/TheFatPanda97/Fight-Club",
                },
                {
                    title: "Skip The Wait",
                    description:
                        "A hackathon project a few friends and I built attempting to solve the wait time issue at hospitals.",
                    imgSrc:
                        "https://raw.githubusercontent.com/TheFatPanda97/Skip-The-Wait/master/dashboard.PNG",
                    repoLink:
                        "https://github.com/TheFatPanda97/Skip-The-Wait",
                },
            ],
        };
    },
    components: {
        "project-card": ProjectCard,
    },
};
</script>

<style scoped>
.projects-page {
    margin-top: 20px;
    background-color: rgb(251, 251, 251);
}
.projects-title {
    text-align: center;
    font-size: 50px;
    margin: 10px;
}
</style>
