import { createApp } from 'vue'
import App from './App.vue';
import router from "./router/index.js";
import ViewUIPlus from 'view-ui-plus';
import 'view-ui-plus/dist/styles/viewuiplus.css';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// import VueSweetalert2 from 'vue-sweetalert2';

createApp(App).use(router).use(VueSweetalert2).use(ViewUIPlus).mount('#app')
