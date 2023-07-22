import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

// Требуется создать Vue приложение

const App = defineComponent({
  data() {
    return {
      test: 'test 1234',
      meetupId: 0,
      header: '',
    };
  },

  watch: {
    meetupId(newMeetupId) {
      console.log('meetupId: ' + newMeetupId);
      fetchMeetupById(newMeetupId).then((json) => (this.header = json.title));
    },
  },

});

const Meetups = createApp(App);
const vm = Meetups.mount('#app');
