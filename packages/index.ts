/*
 * @Description:
 * @Date: 2025-05-15 19:43:06
 * @LastEditTime: 2025-05-16 15:46:25
 */
import type { App } from "vue";
import Button from "./components/Button.vue";
import Icon from "./components/Icon.vue";

const myPlugin = {
  install(app: App) {
    app.component("my-button", Button);
    app.component("my-icon", Icon);
  },
};
export default myPlugin;
