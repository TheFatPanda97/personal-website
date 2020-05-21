<template>
    <v-card v-if="!dark" class="mx-auto">
        <v-img
            class="white--text align-end"
            height="200px"
            :src="cardInfo.imgSrc"
        >
        </v-img>
        <v-card-title>{{ cardInfo.title }}</v-card-title>

        <v-card-text>
            {{ cardInfo.description }}
        </v-card-text>

        <v-card-actions>
            <v-btn
                color="rgb(255, 187, 0)"
                text
                :href="cardInfo.repoLink"
                target="_blank"
            >
                Visit Repository
            </v-btn>
            <v-btn
                v-if="cardInfo.websiteLink"
                color="rgb(255, 187, 0)"
                text
                :href="cardInfo.websiteLink"
                target="_blank"
            >
                Visit Website
            </v-btn>
        </v-card-actions>
    </v-card>

    <v-card v-else class="mx-auto" color="rgb(31,31,31)">
        <v-img
            class="white--text align-end"
            height="200px"
            :src="cardInfo.imgSrc"
        >
        </v-img>
        <v-card-title style="color:white">{{ cardInfo.title }}</v-card-title>

        <v-card-text style="color:white">
            {{ cardInfo.description }}
        </v-card-text>

        <v-card-actions>
            <v-btn
                color="rgb(255, 187, 0)"
                text
                :href="cardInfo.repoLink"
                target="_blank"
            >
                Visit Repository
            </v-btn>
            <v-btn
                v-if="cardInfo.websiteLink"
                color="rgb(255, 187, 0)"
                text
                :href="cardInfo.websiteLink"
                target="_blank"
            >
                Visit Website
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: {
        cardInfo: Object,
        dark: Boolean,
    },
};
</script>
