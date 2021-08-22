<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">Toggle favorite</button>
    <button @click="toggleDetails">{{ toggleButton }} details</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone: </strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email: </strong>
          {{ emailAddress }}
        </li>
    </ul>
    <button @click="deleteFriend">Delete</button>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      required: false,
      default: false,
    },
  },
  emits: ["toggle-favorite", "delete"],
  data() {
    return {
      detailsAreVisible: true,
    };
  },
  computed: {
    toggleButton() {
      return this.detailsAreVisible ? "Hide" : "Show";
    },
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
    deleteFriend(){
      this.$emit("delete", this.id)
    }
  },
};
</script>
