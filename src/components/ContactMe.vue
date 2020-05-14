<template>
    <v-container
        fluid
        :class="dark == false ? 'contact-page-light' : 'contact-page-dark'"
    >
        <v-row>
            <v-col>
                <h1
                    :class="
                        dark == false
                            ? 'contact-title-light'
                            : 'contact-title-dark'
                    "
                >
                    Contact Me
                </h1>
            </v-col>
        </v-row>
        <v-form v-model="valid">
            <v-row justify="center" align="center">
                <v-col cols="12" lg="2" sm="3">
                    <v-text-field
                        :dark="dark == true ? '' : 'false'"
                        v-model="name"
                        label="Name *"
                        required
                    ></v-text-field>
                </v-col>
                <v-col cols="12" lg="2" sm="5">
                    <v-text-field
                        :dark="dark == true ? '' : 'false'"
                        v-model="email"
                        label="Email *"
                        required
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row justify="center" align="center">
                <v-col cols="12" lg="4" sm="8">
                    <v-textarea
                        label="Message *"
                        :dark="dark == true ? '' : 'false'"
                    ></v-textarea>
                </v-col>
            </v-row>
            <v-row justify="center" align="center">
                <v-col cols="12" lg="4" sm="8">
                    <v-btn
                        :dark="dark == true ? '' : 'false'"
                        depressed
                        block
                        outlined
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
        };
    },
    methods: {
        submit() {
            var data = {
                name: "Billy Jean",
                email: "billy@example.com",
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
