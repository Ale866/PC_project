<template>
  <div>
    <active-user :username="user.name" :userage="user.age"></active-user>
    <user-data @add-user="setUser"></user-data>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "Alessandro",
        age: 17,
      },
    };
  },
  methods: {
    setUser(name, age) {
      this.user = {
        name: name,
        age: +age,
      };
    },
  },
};
</script>
