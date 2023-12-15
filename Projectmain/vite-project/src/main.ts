import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import routes from "./router";
import { registerMicroApps, start, initGlobalState } from "qiankun";
import { createPinia } from "pinia";
const pinia: any = createPinia();
const app = createApp(App);
app.use(routes, pinia);

// Mount the app to the #app element
app.mount("#app");
registerMicroApps([
  {
    name: "app1",
    entry: "http://localhost:8080",
    container: "#container",
    activeRule: "/portal/app1",
  },
]);
start();

const { onGlobalStateChange } = initGlobalState({
  user: {
    name : "qiankun"
  },
  color: "red"
});

onGlobalStateChange((value, prev) =>
  console.log("[onGlobalStateChange - master]:", value, prev)
);
