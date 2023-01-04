import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import messagePlugin from "./plugins/messagePlugin";
import "materialize-css/dist/js/materialize.min";

createApp(App).use(messagePlugin).use(store).use(router).mount("#app");
