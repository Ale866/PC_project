// @ts-ignore
const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
    },
  },
  // lifecycle-hooks
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  update() {},
  beforeUnmount() {},
  unmounted() {},
});

app.mount("#app");

setTimeout(() => {
  app.unmount("#app")

}, 3000);

// @ts-ignore
const app2 = Vue.createApp({
  template: `
  <p>{{ favouriteMeal}}</p>
  `,
  data() {
    return {
      favouriteMeal: "pizza",
    };
  },
});

app2.mount("#app2");
