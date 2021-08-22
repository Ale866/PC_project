// @ts-ignore
const appl = Vue.createApp({
  data() {
    return {
      userInput: "",
      hide: false,
      inputColor: "",
    };
  },
  computed: {
    paraClasses() {
      return {
        user1: this.userInput === "user1",
        user2: this.userInput === "user2",
        visible: this.hide,
        hidden: !this.hide,
      };
    },
  },
  methods: {
    togglePar() {
      this.hide = !this.hide;
    },
  },
});

appl.mount("#assignment");
