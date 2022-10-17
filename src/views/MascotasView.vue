<template>
  <v-container>
    <MascotaList :mascotas="mascotas" />
  </v-container>
</template>

<script>
import { defineComponent } from "vue";

import MascotaList from "@/components/Mascotas/MascotaList";
import axios from "axios";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Mascotas",

  data: () => ({
    mascotas: [],
  }),

  components: { MascotaList },

  methods: {
    getPets() {
      axios
        .get("http://localhost:5000/mascotas")
        .then((response) => {
          this.mascotas = response?.data?.rows ?? [];
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  created() {
    this.getPets();
  },
});
</script>
