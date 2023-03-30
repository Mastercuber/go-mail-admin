import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2';

import 'vuetify/styles'
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App)

app
  .use(VueSweetalert2)
  .use(vuetify)
  .use(router)
.mount('#app')
