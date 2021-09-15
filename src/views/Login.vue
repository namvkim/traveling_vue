<template>
  <div class="signup__container">
    <div class="signup__content">
      <form @submit.prevent="onSubmit">
        <div class="signup__title">Login</div>
        <input
          type="text"
          placeholder="User name"
          v-model="username"
          required
        />
        <input
          type="password"
          placeholder="Password"
          v-model="password"
          required
        />
        <input type="submit" value="Login" />
        <div class="signup__note">
          You don't have an account?
          <router-link to="/signup">Sign up</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("postLogin", {
        username: this.username,
        password: this.password,
      });
    },
  },
  computed: {},
};
</script>

<style scoped>
.signup__container {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.signup__content {
  width: 500px;
  padding: 30px 0;
  background-color: rgba(85, 85, 85, 0.322);
  border: 1px solid rgba(189, 182, 182, 0.185);
  border-radius: 8px;
  margin-bottom: 100px;
}

.signup__content form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.signup__title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
}
.signup__content form > input {
  font-size: 16px;
  padding: 8px 20px;
  width: 300px;
  margin: 10px 0;
  outline: none;
}

.signup__content form > input[type="submit"] {
  width: 344px;
  font-weight: bold;
  background-color: rgb(108, 196, 108);
  cursor: pointer;
  border: none;
}

.signup__content form > input[type="submit"]:hover {
  background-color: rgb(82, 155, 204);
}

.signup__note {
  width: 344px;
  margin-top: 20px;
}
@media (min-width: 768px) {
  .signup__content {
    margin-bottom: 200px;
  }
}
</style>