<template>
  <v-container>
    <formulario-soliciutd @on-submit="postRequest" />
  </v-container>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

import FormularioSoliciutd from "@/components/Solicitud/FormularioSoliciutd";

export default defineComponent({
  name: "SolicitudMascota",

  components: { FormularioSoliciutd },

  data: () => ({
    currentId: "",
  }),

  methods: {
    postRequest({ name, email, phone }) {
      axios
        .post(`http://localhost:5000/mascotas/${this.currentId}/solicitudes`, {
          //generate random number between 1 and 99999999
          id: Math.floor(Math.random() * 99999999) + 1,
          clientName: name,
          mail: email,
          phone: phone,
          date: Date.now(),
          state: "pending",
        })
        .then(() => {
          window.alert(
            `solicitud creada con exito para adoptar una nueva mascota`
          );
        });
    },
  },

  beforeMount() {
    this.currentId = this.$route.params.id;
  },
});
</script>