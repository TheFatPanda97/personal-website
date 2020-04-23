<template>
            <v-parallax src="../assets/intro-background.png" height="700" id="intro">
                <h2 class="intro-1">
                    HELLO, I'M
                </h2>
                <h1 class="intro-2">
                    SHAWN HU
                </h1>
                <h3 class="intro-3">
                    A Hopeful Computer Science Student
                </h3>
                <div style="margin-left: auto; margin-right: auto;">
                    <v-btn
                        rounded
                        width="150px"
                        style="margin: 20px;"
                        color="rgb(255, 187, 0)"
                        depressed
                    >
                        VIEW MY WORK
                    </v-btn>
                </div>
            </v-parallax>
</template>

<script>
export default {};
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
.intro-1 {
    color: rgb(255, 187, 0);
    text-align: center;
    font-size: 50px;
}
.intro-2 {
    color: black;
    text-align: center;
    font-size: 60px;
}
.intro-3 {
    color: grey;
    text-align: center;
}
</style>
