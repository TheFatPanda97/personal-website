<template>
  <v-img
    v-if="$isMobile()"
    :src="
      !dark
        ? require('../assets/intro-background-light.png')
        : require('../assets/intro-background-dark.png')
    "
    height="700"
    id="intro"
  >
    <div style="margin-top: 200px;">
      <h2 class="intro-1">
        HELLO, I'M
      </h2>
      <h1 :class="!dark ? 'intro-2-light' : 'intro-2-dark'">
        SHAWN HU
      </h1>
      <h3 class="intro-3">
        A Hopeful Computer Science Student
      </h3>
      <div>
        <div style="text-align: center;">
          <v-btn
            rounded
            width="150px"
            style="margin: 20px;"
            color="rgb(255, 187, 0)"
            depressed
            @click="viewWorkFn('#projects')"
          >
            VIEW MY WORK
          </v-btn>
        </div>
      </div>
    </div>
  </v-img>

  <v-parallax
    v-else
    :src="
      !dark
        ? require('../assets/intro-background-light.png')
        : require('../assets/intro-background-dark.png')
    "
    height="700"
    id="intro"
  >
    <h2 class="intro-1">
      HELLO, I'M
    </h2>
    <h1 :class="!dark? 'intro-2-light' : 'intro-2-dark'">
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
        @click="viewWorkFn('#projects')"
      >
        VIEW MY WORK
      </v-btn>
    </div>
  </v-parallax>
</template>

<script>
export default {
  props: {
    viewWorkFn: Function,
    dark: Boolean,
  },
};
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
.intro-2-dark {
  color: white;
  text-align: center;
  font-size: 60px;
}
.intro-2-light {
  color: black;
  text-align: center;
  font-size: 60px;
}
.intro-3 {
  color: grey;
  text-align: center;
}
</style>
