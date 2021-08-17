<template>
  <form @submit.prevent="handleSubmit">
    <label for="email">Email</label>
    <input type="email" id="email" v-model="email" required /> <br />
    <label for="password">Password</label>
    <input type="password" id="password" v-model="password" required /> <br />
    <button>submit</button>
  </form>
  {{ email }}
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    save() {
      console.log(this.email);
    },
    handleSubmit() {
      console.log("submit");
    },
  },
};
</script>

<style>
</style>