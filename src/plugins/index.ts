import vuetify from './vuetify';
import pinia from '../stores';
import router from '../router';
import Toast, { PluginOptions, POSITION } from "vue-toastification";
import type { App } from 'vue';

const toastOptions: PluginOptions = {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true,
  timeout: 5000,
  position: POSITION.BOTTOM_RIGHT
};

export function registerPlugins(app: App) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(Toast, toastOptions);
}
