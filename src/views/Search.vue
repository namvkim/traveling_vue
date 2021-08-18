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
  <div class="search__content"></div>
</template>

<script>
export default {};
</script>

<style scoped>
.search__header {
  width: 100%;
  height: 50px;
  position: fixed;
  display: flex;
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
</style>