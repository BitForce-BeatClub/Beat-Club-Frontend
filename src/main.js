import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import firebase from "firebase/compat";
// PrimeVue Styles
import "primevue/resources/themes/md-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
// PrimeFlex Companion
import "primeflex/primeflex.css";
//
import Dialog from "primevue/dialog";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import Sidebar from "primevue/sidebar";
import Row from "primevue/row";
import Toast from "primevue/toast";
import Tag from "primevue/tag";
import Card from "primevue/card";
import Dropdown from "primevue/dropdown";
import InputNumber from "primevue/inputnumber";
import Password from "primevue/password";
import InputText from "primevue/inputtext";

// PrimeVue Styles
import "primevue/resources/themes/md-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
// PrimeFlex Companion
import "primeflex/primeflex.css";

const firebaseConfig = {
  apiKey: "AIzaSyB5_Hqojo_tJCludylcYIY16R7If-dfFAo",
  authDomain: "beatclub-45762.firebaseapp.com",
  projectId: "beatclub-45762",
  storageBucket: "beatclub-45762.appspot.com",
  messagingSenderId: "667258689937",
  appId: "1:667258689937:web:67bac69e730825f5ca2230",
  measurementId: "G-BHPMKHHCZQ",
};

firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged((user) => {
  console.log("user", user);
  if (!app) {
    app = createApp(App);
    app.use(router);
    app.use(PrimeVue, { ripple: true });
    app.use(ToastService);
    // PrimeVue Components
    app.component("pv-data-table", DataTable);
    app.component("pv-column", Column);
    app.component("pv-button", Button);
    app.component("pv-toolbar", Toolbar);
    app.component("pv-input-text", InputText);
    app.component("pv-sidebar", Sidebar);
    app.component("pv-row", Row);
    app.component("pv-dialog", Dialog);
    app.component("pv-toast", Toast);
    app.component("pv-dropdown", Dropdown);
    app.component("pv-tag", Tag);
    app.component("pv-card", Card);
    app.component("InputNumber", InputNumber);
    app.component("p-password", Password);
    app.component("p-inputtext", InputText);
    app.mount("#app");
  }
});
