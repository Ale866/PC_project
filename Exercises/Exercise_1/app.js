// @ts-ignore
const appl = Vue.createApp({
  data() {
    return {
      name: "Alessandro",
      age: 17,
      image:
        "https://assets.turbologo.com/blog/it/2019/11/19133142/gaming-logo-cover.jpg",
    };
  },
  methods: {
    agePlusFive() {
      return this.age + 5;
    },
    randomNumber() {
      let num = Math.random();
      return num;
    },
  },
});

appl.mount("#assignment");
