<template>
    <v-card class="mx-auto" max-width="480" min-width="200">
        <v-img
            class="white--text align-end"
            height="200px"
            :src="cardInfo.imgSrc"
        >
        </v-img>
        <v-card-title>{{ cardInfo.title }}</v-card-title>

        <v-card-text class="text--primary">
            <div>{{ cardInfo.description }}</div>
        </v-card-text>

        <v-card-actions>
            <v-btn color="rgb(255, 187, 0)" text :href="cardInfo.repoLink">
                Visit Repository
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: {
        cardInfo: Object,
    },
};
</script>
