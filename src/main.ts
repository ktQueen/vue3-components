import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import components from "./components/index";

const app = createApp(App);

app.use(components);

app.mount("#app");
