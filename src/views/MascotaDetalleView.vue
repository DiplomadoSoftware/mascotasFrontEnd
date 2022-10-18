<template>
  <v-container v-if="mascota.id">
    <detalle-mascota
      :nombre="mascota.nombre"
      :descripcion="mascota.descripcion"
      :id="mascota.id"
    />
  </v-container>
</template>

<script>
import { defineComponent } from "vue";
import DetalleMascota from "@/components/Mascota/DetalleMascota";
import axios from "axios";

export default defineComponent({
  name: "MascotaDetalleView",

  data: () => ({
    mascota: {},
  }),

  components: { DetalleMascota },

  methods: {
    getPets() {
      axios
        .get("http://localhost:5000/mascotas")
        .then((response) => {
          const pet = (response?.data?.rows ?? []).find(
            (pet) => pet.id === parseInt(this.currentId)
          );
          this.mascota = pet;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  beforeMount() {
    this.currentId = this.$route.params.id;
  },

  created() {
    this.getPets();
  },
});
</script>
