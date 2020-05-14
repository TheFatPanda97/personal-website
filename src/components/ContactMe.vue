<template>
  <v-container
    fluid
    :class="!dark ? 'contact-page-light' : 'contact-page-dark'"
  >
    <v-row>
      <v-col>
        <h1
          :class="!dark ? 'contact-title-light' : 'contact-title-dark'"
        >
          Contact Me
        </h1>
      </v-col>
    </v-row>
    <v-form v-model="valid">
      <v-row justify="center" align="center">
        <v-col cols="12" lg="2" sm="3">
          <v-text-field
            :dark="dark"
            v-model="name"
            label="Name *"
            :rules="nameRules"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="2" sm="5">
          <v-text-field
            :dark="dark"
            v-model="email"
            :rules="emailRules"
            label="Email *"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="12" lg="4" sm="8">
          <v-textarea
            label="Message *"
            :rules="messageRules"
            v-model="message"
            required
            :dark="dark"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="12" lg="4" sm="8">
          <v-btn
            :dark="dark"
            depressed
            block
            outlined
            style="margin-bottom: 40px"
            @click="submit"
            >Submit</v-btn
          >
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  props: {
    dark: Boolean,
  },
  data() {
    return {
      valid: false,
      name: "",
      email: "",
      message: "",
      nameRules: [(v) => !!v || "Name is required"],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      messageRules: [(v) => !!v || "Message is required"],
    };
  },
  methods: {
    submit() {
      console.log(this.valid);
      var data = {
        name: this.name,
        email: this.email,
        message: this.message,
      };
      window.Pageclip.send(
        "qp33AtF18MuhmuxFn1gHpkWWCzCpRXqh",
        "contact-form",
        data,
        function(error, response) {
          console.log(error.message);

          console.log(response);
        }
      );
    },
  },
};
</script>

<style scoped>
.contact-page-dark {
  background-color: rgb(18, 18, 18);
}
.contact-page-light {
  background-color: white;
}
.contact-title-dark {
  text-align: center;
  font-size: 50px;
  margin: 10px;
  color: white;
}
.contact-title-light {
  text-align: center;
  font-size: 50px;
  margin: 10px;
}
</style>
