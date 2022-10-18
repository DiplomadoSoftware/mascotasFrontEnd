<template>
  <v-container class="list-container">
    <div :key="mascota.id" v-for="mascota in mascotas" class="card-container">
      <mascota-card
        :id="mascota.id"
        :tipo="mascota.tipo"
        :estado="mascota.estado"
        :raza="mascota.raza"
        :nombre="mascota.nombre"
      />
    </div>
  </v-container>
</template>

<script>
import { defineComponent } from "vue";
// Components
import MascotaCard from "@/components/Mascotas/MascotaCard";
export default defineComponent({
  name: "MascotaList",
  props: {
    mascotas: { type: Array },
  },
  components: {
    MascotaCard,
  },
});
</script>

<style scoped>
.card-container {
  margin: 12px;
  max-width: 350px;
}
.list-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>

      