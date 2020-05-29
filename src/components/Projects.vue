<template>
    <v-container fluid :class="!dark ? 'projects-page-light' : 'projects-page-dark'">
        <v-row>
            <v-col>
                <h1 :class="!dark ? 'projects-title-light' : 'projects-title-dark'">
                    Projects
                </h1>
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
                <project-card :cardInfo="currCardInfo" :dark="dark"></project-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ProjectCard from "./ProjectCard";

export default {
    props: {
        dark: Boolean,
    },
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
                        "https://raw.githubusercontent.com/TheFatPanda97/personal-website/master/src/assets/intro-background-light.png",
                    repoLink: "https://github.com/TheFatPanda97/personal-website",
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
                    repoLink: "https://github.com/Isomo-Recruitment",
                    websiteLink: "https://isomo.netlify.app/",
                },
                {
                    title: "Fight Club",
                    description:
                        "Do you love Naruto and Mortal Kombat? Well this is a fighting game where Anime characters fight each other.",
                    imgSrc:
                        "https://raw.githubusercontent.com/TheFatPanda97/Fight-Club/master/main-menu.PNG",
                    repoLink: "https://github.com/TheFatPanda97/Fight-Club",
                },
                {
                    title: "Weatherman",
                    description:
                        "Tired of looking for the weather through a pool of ads? Here is a dead simple app that gives you the weather forecast.",
                    imgSrc:
                        "https://images.unsplash.com/photo-1508697014387-db70aad34f4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
                    repoLink: "https://github.com/TheFatPanda97/weatherman",
                    websiteLink: "https://hu-weatherman.herokuapp.com/",
                },
                {
                    title: "Personal Expense Tracker",
                    description:
                        "A personal expense tracker built using Flutter. Haven't figured out how to store the data locally yet 😅.",
                    imgSrc:
                        "https://raw.githubusercontent.com/TheFatPanda97/personal_expense_tracker/master/assets/images/demo.png",
                    repoLink: "https://github.com/TheFatPanda97/personal_expense_tracker",
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
.projects-page-dark {
    background-color: rgb(18, 18, 18);
}
.projects-page-light {
    background-color: rgb(251, 251, 251);
}
.projects-title-dark {
    text-align: center;
    font-size: 50px;
    margin: 10px;
    color: white;
}
.projects-title-light {
    text-align: center;
    font-size: 50px;
    margin: 10px;
}
</style>
