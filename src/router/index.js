import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/mascotas",
    name: "mascotas",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MascotasView.vue"),
  },
  {
    path: "/mascota",
    name: "mascota",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MascotaDetalleView.vue"),
  },
  {
    path: "/solicitud",
    name: "solicitud",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SolicitudView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
