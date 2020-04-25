<template>
    <v-container fluid class="projects-page">
        <v-row>
            <v-col>
                <h1 class="projects-title">Projects</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col
                v-for="currCardInfo in allCardInfo"
                :key="currCardInfo.title"
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
                        "Unifying UofT's course data, and using it to build tools such as a course guide and timetable planner.",
                    imgSrc: "https://raw.githubusercontent.com/UTM-Hacklab/UofTCourseTools/master/packages/docs/course-guide/figma_pic.png",
                    repoLink: "https://github.com/UTM-Hacklab/UofTCourseTools",
                },
                {
                    title: "Flappy Bird",
                    description: "You may be thinking, is this ugly thing worth putting on the website? But get this, I made it in assembly. 🤪",
                    imgSrc: "https://raw.githubusercontent.com/TheFatPanda97/flappybird/master/gameplay.PNG",
                    repoLink: "https://github.com/TheFatPanda97/flappybird",
                },
                {
                    title: "Shawn's Portfolio",
                    description: "The repository that contains the source file I used to build this website. He didn't use webflow or wix? What is he, insane? (Vue masterace)",
                    imgSrc: "https://raw.githubusercontent.com/TheFatPanda97/personal-website/master/src/assets/intro-background.png",
                    repoLink: "https://github.com/TheFatPanda97/personal-website",
                },
                {
                    title: "Isomo",
                    description: "The repository that contains the source file I used to build this website. He didn't use webflow or wix? What is he, insane? (Vue masterace)",
                    imgSrc: "../assets/about-me-photo.png",
                    repoLink: "https://github.com/TheFatPanda97/personal-website",
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
