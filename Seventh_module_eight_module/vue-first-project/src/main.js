import { createApp } from "vue";
// @ts-ignore
import App from "./App.vue";

// @ts-ignore
import FriendContact from "./components/FriendContact.vue";
const app = createApp(App);
// @ts-ignore
import NewFriend from "./components/NewFriend.vue";

app.component("friend-contact", FriendContact);
app.component("new-friend", NewFriend);
app.mount("#app");
