// @ts-ignore
const appl = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  watch: {
    showCounter(value) {
      let that = this;
      setTimeout(() => {
        that.counter = 0;
      }, 5000);
    },
  },
  computed: {
    showCounter() {
      if (this.counter === 0) {
        return "";
      } else if (this.counter < 37) {
        return "Not there yet";
      } else if (this.counter > 37) {
        return "Too much";
      } else {
        return this.counter;
      }
    },
  },
  methods: {
    addFive() {
      this.counter = this.counter + 5;
    },
    addOne(num) {
      this.counter++;
    },
  },
});

appl.mount("#assignment");
