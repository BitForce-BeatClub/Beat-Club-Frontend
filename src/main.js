import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import DisableAutocomplete from "@aacassandra/vue-disable-autocomplete";
// PrimeVue Styles

import "primevue/resources/themes/mdc-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
// PrimeFlex Companion
import "primeflex/primeflex.css";
//

import Dialog from "primevue/dialog";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Chip from "primevue/chip";
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
import Calendar from "primevue/calendar";
import Checkbox from "primevue/checkbox";

import Divider from "primevue/divider";
import RadioButton from "primevue/radiobutton";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import Textarea from "primevue/textarea";
import FileUpload from "primevue/fileupload";
import SplitButton from "primevue/splitbutton";
import Inputmask from "primevue/inputmask";
import Slider from "primevue/slider";

const firebaseConfig = {
  apiKey: "AIzaSyB5_Hqojo_tJCludylcYIY16R7If-dfFAo",
  authDomain: "beatclub-45762.firebaseapp.com",
  projectId: "beatclub-45762",
  storageBucket: "beatclub-45762.appspot.com",
  messagingSenderId: "667258689937",
  appId: "1:667258689937:web:67bac69e730825f5ca2230",
  measurementId: "G-BHPMKHHCZQ",
};

initializeApp(firebaseConfig);

let app;

getAuth().onAuthStateChanged(() => {
  // console.log("user", user);
  if (!app) {
    app = createApp(App);
    // Routing Management
    app.use(router);

    // PrimeVue configuration
    app.use(PrimeVue, { ripple: true });

    // Toast Service
    app.use(ToastService);

    // DisableAutocomplete
    app.use(DisableAutocomplete);

    // PrimeVue Components
    app.component("pv-slider", Slider);
    app.component("pv-data-table", DataTable);
    app.component("pv-column", Column);
    app.component("pv-button", Button);
    app.component("pv-toolbar", Toolbar);
    app.component("pv-input-text", InputText);
    app.component("pv-input-text-area", Textarea);
    app.component("pv-file-upload", FileUpload);
    app.component("pv-split-button", SplitButton);
    app.component("pv-sidebar", Sidebar);
    app.component("pv-row", Row);
    app.component("pv-dialog", Dialog);
    app.component("pv-toast", Toast);
    app.component("pv-dropdown", Dropdown);
    app.component("pv-tag", Tag);
    app.component("pv-card", Card);
    app.component("InputNumber", InputNumber);
    app.component("pv-password", Password);
    app.component("pv-calendar", Calendar);
    app.component("pv-checkbox", Checkbox);
    app.component("pv-divider", Divider);
    app.component("pv-input-mask", Inputmask);
    app.component("pv-text-area", Textarea);
    app.component("pv-radio-button", RadioButton);
    app.component("pv-tab-view", TabView);
    app.component("pv-tab-panel", TabPanel);
    app.component("pv-chip", Chip);
    app.mount("#app");
  }
});
