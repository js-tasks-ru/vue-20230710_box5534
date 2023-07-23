import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

const App = defineComponent({
  data() {
    return {
      arg1: 0,
      arg2: 0,
      operation: '',
    }
  },

  computed: {
    result() {
      switch (this.operation) {
        case 'sum': return this.arg1 + this.arg2;
        case 'subtract': return this.arg1 - this.arg2;
        case 'multiply': return this.arg1 * this.arg2;
        case 'divide': return this.arg1 / this.arg2;
        default: return ''
      }
    }
  }
});

createApp(App).mount('#app');
