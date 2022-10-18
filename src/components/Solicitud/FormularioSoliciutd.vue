<template>
  <v-container>
    <v-card rounded elevation="3" class="formulario-solicitud-mascota">
      <v-card-title> Formulario de solicitud de adopcion </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="name"
            variant="outlined"
            :counter="10"
            :rules="nameRules"
            label="Nombre"
            required
          />

          <v-text-field
            v-model="email"
            variant="outlined"
            :rules="emailRules"
            label="E-mail"
            required
          />

          <v-text-field
            v-model="phone"
            variant="outlined"
            label="Telefono"
            required
          />

          <v-checkbox
            v-model="checkbox"
            :rules="[(v) => !!v || 'Debes estar seguro para continuar']"
            label="Esta seguro de adoptar una mascota?"
            required
          ></v-checkbox>

          <v-btn
            :disabled="!valid"
            class="mr-4"
            @click="$emit('onSubmit', { name, email, phone })"
          >
            Aplicar
          </v-btn>

          <router-link to="/mascotas">
            <v-btn color="warning"> Cancelar </v-btn>
          </router-link>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "FormularioSolicitud",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    phone: "",
    checkbox: false,
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
  },
  components: {},
});
</script>

<style scoped>
.formulario-solicitud-mascota {
  background-color: #a7c4bc;
}
</style>

      