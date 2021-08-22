// code without vue

// const buttonEl = document.querySelector("button");
// const inputEl = document.querySelector("input");
// const listEL = document.querySelector("ul");

// function addGoal(){
//     const enteredValue = inputEl.value;
//     const listItemEL = document.createElement("li");
//     listItemEL.textContent = enteredValue;
//     listEL.append(listItemEL);
//     inputEl.value = '';
// }

// buttonEl.addEventListener("click", addGoal)

// @ts-ignore
Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      if (this.enteredValue === "") {
        return;
      } else {
        this.goals.push(this.enteredValue);
        this.enteredValue = "";
        console.log(this.goals);
      }
    },
  },
}).mount("#app");
