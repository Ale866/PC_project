// @ts-ignore
const appl = Vue.createApp({
  data() {
    return {
      enteredValue: "",
      tasks: [],
      isHidden: false,
    };
  },
	computed: {
		button(){
			return this.isHidden ? "Hide" : "Show"
		}
	},
  methods: {
    addTask() {
      this.tasks.push(this.enteredValue);
      this.enteredValue = "";
    },
    hideList() {
      this.isHidden = !this.isHidden;
      if (this.isHidden === true) {
        this.button = this.properties[1];
      } else {
        this.button = this.properties[0];
      }
    },
  },
});

appl.mount("#assignment");
