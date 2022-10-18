<template>
  <v-container>
    <v-card class="detalle-mascota-card">
      <v-card-title> {{ `Hola! me llamo ${nombre}` }} </v-card-title>
      <v-card-text> {{ descripcion }} </v-card-text>
      <v-card-actions>
        <router-link to="/mascotas">
          <v-btn> Volver </v-btn>
        </router-link>
        <router-link :to="`/solicitud/${id}`">
          <v-btn> Adoptar </v-btn>
        </router-link>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "DetalleMascota",
  props: {
    nombre: { type: String },
    descripcion: { type: String },
    id: { type: Number, required: true },
  },
  components: {},
});
</script>

<style scoped>
.detalle-mascota-card {
  background-color: #a7c4bc;
}
</style>