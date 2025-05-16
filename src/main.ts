import { createApp } from "vue";
import App from "./App.vue";
import myPlugin from "../packages/index";

const app = createApp(App);

app.use(myPlugin);

app.mount("#app");
