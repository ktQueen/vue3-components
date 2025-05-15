/*
 * @Description:
 * @Date: 2025-05-15 19:43:06
 * @LastEditTime: 2025-05-15 19:47:19
 */
import type { App } from "vue";
import HelloWorld from "./HelloWorld.vue";
import Demo1 from "./Demo1.vue";

export default {
  install(app: App) {
    app.component("HelloWorld", HelloWorld);
    app.component("Demo1", Demo1);
  },
};
