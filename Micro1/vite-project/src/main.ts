import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import routes from "./router";
import {
  QiankunProps,
  qiankunWindow,
  renderWithQiankun,
} from "vite-plugin-qiankun/dist/helper";
import { createPinia } from "pinia";
import { useMyStore } from "./stores";
const pinia: any = createPinia();
function storeTest(props: any) {
  props.onGlobalStateChange &&
    props.onGlobalStateChange(
      (value: any, prev: any) =>{
        console.log(`[onGlobalStateChange - ${props.name}] :`, value, prev);

        // Assuming value.user.name is the new value you want to set
        const newValue = value.user.name;

        // Access the Pinia store and set the new value
        const myStore = useMyStore();
        myStore.changeName(newValue);
      },
      true
    );
  // props.setGlobalState &&
  //   props.setGlobalState({
  //     ignore: props.name,
  //     user: {
  //       name: props.name,
  //     },
  //   });
}
let instance: any = null;

interface Props {
  container?: HTMLElement;
}

function render(props: Props) {
  const { container } = props;
  instance = createApp(App);
  instance.use(pinia);
  instance.use(routes);
  instance.mount(container ? container.querySelector("#app") : "#app");
}

renderWithQiankun({
  mount(props: QiankunProps) {
    render(props);
    storeTest(props);
    console.log("mount", props);
  },
  bootstrap(): void {
    console.log("bootstrap");
  },
  unmount(props: any): void {
    instance.unmount();
    instance._container.innerHTML = "";
    instance = null;
    console.log("unmount");
  },
  update(props: any): void {
    console.log("vue3sub update");
    console.log(props, "setNew");
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
