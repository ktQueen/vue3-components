import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);

import HelloWorld from "./components/HelloWorld.vue";
app.component("HelloWorld", HelloWorld);

app.mount("#app");
