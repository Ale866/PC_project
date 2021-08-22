// @ts-ignore
const app = Vue.createApp({
  data() {
    return {
      first_output: "Output: ",
      second_output: "Output: ",
    };
  },
  methods: {
    show() {
      alert("This is an alert");
    },
    Output(event) {
      this.first_output = event.target.value;
    },
    setTemp(event) {
      this.second_output = event.target.value;
    },
  },
});

app.mount("#assignment");
