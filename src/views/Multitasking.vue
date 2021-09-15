<template>
  <div class="search__header">
    <div class="search__header__box">
      <router-link to="/" class="search__back"
        ><i class="fas fa-arrow-left"></i
      ></router-link>
      <input type="text" placeholder="Search in Traveling" />
      <i class="fas fa-search search__icon"></i>
    </div>
  </div>
  <div class="search__content">
    <div class="multitasking__item" @click="personal">
      <i class="fas fa-user"></i>Personal page
    </div>
    <div class="multitasking__item" @click="logout">
      <i class="fas fa-sign-out-alt"></i>Logout
    </div>
  </div>
</template>

<script>
import router from "../router/index";
export default {
  methods: {
    personal() {
      router.push("/personal");
    },
    logout() {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("tokenType");
      router.push("/");
    },
  },
};
</script>

<style scoped>
.search__header {
  width: 100%;
  height: 50px;
  position: fixed;
  display: flex;
  top: 0;
  align-items: center;
  border-bottom: 1px solid grey;
  background: #fff;
}
.search__header__box {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search__header__box input {
  width: 60%;
  padding: 5px 10px;
  border-radius: 15px;
  border: 1px solid grey;
  outline: none;
}

.search__header__box input:focus ~ .search__icon {
  display: block;
}

.search__back {
  position: absolute;
  left: 20px;
}
.search__icon {
  position: absolute;
  right: 20px;
  display: none;
}
.search__content {
  margin-top: 60px;
}
.multitasking__item {
  padding: 10px 20px;
  display: flex;
  align-items: center;
}
.multitasking__item i {
  margin-right: 5px;
}
</style>