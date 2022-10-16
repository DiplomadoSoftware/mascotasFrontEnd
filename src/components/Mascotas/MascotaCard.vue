<template>
  <v-card class="mascota-card">
    <v-card-title> {{ nombre }} </v-card-title>
    <v-card-text>
      <p>{{ `tipo: ${tipo}` }}</p>
      <p>{{ `estado: ${estado}` }}</p>
      <p>{{ `raza: ${raza}` }}</p>
    </v-card-text>
    <v-card-actions>
      <router-link :to="`/mascota/${id}`">
        <v-btn> Detalles </v-btn>
      </router-link>
      <router-link :to="`/solicitud/${id}`">
        <v-btn> Adoptar </v-btn>
      </router-link>
    </v-card-actions>
  </v-card>
</template>

<script>
import { defineComponent } from "vue";
// Components
export default defineComponent({
  name: "MascotaCard",
  props: {
    nombre: { type: String },
    tipo: { type: String },
    estado: { type: String },
    raza: { type: String },
    id: { type: Number, required: true },
  },
  components: {},
});
</script>

<style scoped>
.mascota-card {
  background-color: #a7c4bc;
}
</style>

      