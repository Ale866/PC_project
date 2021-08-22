import { createApp } from 'vue';
// @ts-ignore
import App from './App.vue';
// @ts-ignore
import BaseCard from './components/UI/BaseCard.vue';
// @ts-ignore
import BaseButton from './components/UI/BaseButton.vue';
// @ts-ignore
import BaseDialog from "./components/UI/BaseDialog.vue"
const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);

app.mount('#app');
