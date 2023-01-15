import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import messagePlugin from "./plugins/messagePlugin";
import "materialize-css/dist/js/materialize.min";

const firebaseConfig = {
  apiKey: "AIzaSyAV3As9oUu0pBWtwFZIG-J6YYpzLne6tKc",
  authDomain: "lesnik-crm.firebaseapp.com",
  projectId: "lesnik-crm",
  storageBucket: "lesnik-crm.appspot.com",
  messagingSenderId: "640122806324",
  appId: "1:640122806324:web:ad05efd87a4b8be57aea61",
  measurementId: "G-DT3ZBTNHW6",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

console.log(analytics, auth);

createApp(App).use(messagePlugin).use(store).use(router).mount("#app");
