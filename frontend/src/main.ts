import { createApp } from "vue/dist/vue.esm-bundler";
import { plugin, defaultConfig } from "@formkit/vue";
import App from "./App.vue";

import "./assets/main.css";

const app = createApp(App).use(plugin, defaultConfig).mount("#app");
