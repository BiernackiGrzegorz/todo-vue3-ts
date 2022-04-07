import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/dashboard",
    name: "dashboard",
    component: () => import('./pages/Dashboard.vue'),
  },
//   {
//     path: "/tutorials/:id",
//     name: "tutorial-details",
//     component: () => import("./components/TutorialDetails.vue"),
//   },
//   {
//     path: "/add",
//     name: "add",
//     component: () => import("./components/AddTutorial.vue"),
//   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;