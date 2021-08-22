<template>
	<section>
		<form @submit.prevent="submitData">
		<input type="text" placeholder="Name" v-model="enteredName">
		<input type="number" placeholder="Age" v-model="enteredAge">
		<button>Set user data</button>
		</form>
	</section>
</template>

<script>
export default {
	emits: ["add-user"],
	data(){
		return{
			enteredName: "",
			enteredAge: null,
		}
	},
	methods:{
		submitData(){
			this.$emit("add-user", this.enteredName, this.enteredAge)
		}
	}
};
</script>
