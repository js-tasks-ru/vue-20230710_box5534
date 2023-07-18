import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

const App = defineComponent({
  data() {
      return {
          btnCounter: 0
      };
  },
});

createApp(App).mount('#app');
