import { createRouter, createWebHistory } from "vue-router";
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import Home from "../views/Home.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? "/portal/app1" : "/"),
  routes,
});

export default router;
