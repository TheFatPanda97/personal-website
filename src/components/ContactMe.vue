<template>
  <v-container
    fluid
    :class="!dark ? 'contact-page-light' : 'contact-page-dark'"
  >
    <v-row>
      <v-col>
        <h1 :class="!dark ? 'contact-title-light' : 'contact-title-dark'">
          Contact Me
        </h1>
      </v-col>
    </v-row>
    <v-form v-model="valid" ref="form">
      <v-row justify="center" align="center">
        <v-col cols="12" lg="5" sm="8">
          <v-text-field
            :dark="dark"
            v-model="name"
            label="Name *"
            :rules="nameRules"
            required
          ></v-text-field>
          <v-text-field
            :dark="dark"
            v-model="email"
            :rules="emailRules"
            label="Email *"
            required
          ></v-text-field>
          <v-textarea
            label="Message *"
            :rules="messageRules"
            v-model="message"
            required
            :dark="dark"
          ></v-textarea>
          <v-btn
            :dark="dark"
            depressed
            block
            outlined
            :loading="loading"
            style="margin-bottom: 40px"
            @click="submit"
          >
            Submit
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
    <v-snackbar v-model="snackbar">
      {{ submitText }}
      <v-btn color="pink" text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  props: {
    dark: Boolean,
  },
  data() {
    return {
      snackbar: false,
      loading: false,
      valid: false,
      submitText: "Hello",
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
      var data = {
        name: this.name,
        email: this.email,
        message: this.message,
      };

      if (this.valid) {
        this.loading = true;
        var vm = this;
        window.Pageclip.send(
          "qp33AtF18MuhmuxFn1gHpkWWCzCpRXqh",
          "contact-form",
          data,
          (error) => {
            vm.loading = false;
            if (error == null) {
              vm.submitText = "Message sent, thanks 😄";
              this.resetForm();
            } else {
              vm.submitText = "Something went wrong 😓";
            }
            vm.snackbar = true;
          }
        );
      }
    },
    
    resetForm() {
      this.$refs.form.reset();
      this.$refs.form.resetValidation();
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
