import { registerPlugins } from '@/plugins';
import App from './app.vue';
import { createApp } from 'vue';
import "./styles/index.css";
import "vue-toastification/dist/index.css";

const app = createApp(App);

registerPlugins(app);



app.mount('#app');
