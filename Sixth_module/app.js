// @ts-ignore
const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lopez",
          phone: "339 225 8993",
          email: "manuel@gmail.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "338 336 5841",
          email: "julie@gmail.com",
        },
      ],
    };
  },
  computed: {
    hideOrShow() {
      return this.detailsVisible ? "Hide" : "Show";
    },
  },
  methods: {},
});

app.component('friend-contact', {
  template: `
	<li>
    <h2>{{ friend.name }}</h2>
    <button @click="showDetails">{{ hideOrShow}} Details</button>
    <ul v-if="detailsVisible">
      <li><strong>Phone: </strong>{{ friend.phone }}</li>
      <li><strong>Email: </strong>{{ friend.email }}</li>
    </ul>
  </li>`,
  data() {
    return {
      detailsVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lopez",
        phone: "339 225 8993",
        email: "manuel@gmail.com",
      },
    };
  },
  methods: {
    showDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
  },
});

app.mount("#app");
