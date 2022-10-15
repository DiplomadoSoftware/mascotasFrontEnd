<template>
  <v-app full-height class="app">
    <v-app-bar :elevation="2" rounded color="#A7C4BC">
      <v-app-bar-title>Pet shop</v-app-bar-title>
      <v-spacer></v-spacer>
      <router-link to="/"> sobre nosotros </router-link>
      <router-link to="/mascotas"> Mascotas </router-link>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet class="main-container" rounded elevation="3">
          <router-view />
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.app {
  background-color: #dfeeea;
}
.main-container {
  background-color: #a7c4bc;
  padding: 16px;
  height: 100vh;
}
</style>
