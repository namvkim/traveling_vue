<template>
  <div class="home__container">
    <Menu />
    <div class="home__content">
      <div></div>
      <div style="grid-row-end: span 5"></div>
      <div style="grid-row-end: span 10">
        <!-- <input type="text" class="home__search" />
        <div class="home__title">Traveling</div> -->
      </div>
      <div style="grid-row-end: span 5"></div>
      <div></div>
      <router-link
        v-for="item in destination"
        :key="item.id"
        :to="/details/ + item.id"
        class="home__item"
        :style="'background-image: url(' + item.img + ');'"
      >
        <div class="home__item__cover">
          <div class="home__item__title">
            {{ item.title }}
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";

export default {
  name: "Home",
  components: {
    Menu,
  },
  data() {
    return {};
  },
  computed: {
    destination() {
      return this.$store.state.destination.destinations;
    },
  },
  mounted() {
    this.$store.dispatch("getDestinations");
  },
};
</script>
<style scoped>
.home__container {
  display: flex;
  justify-content: center;
}
.home__content {
  width: 100%;
  margin-top: 80px;
  padding: 15px;

  display: grid;
  grid-template-columns: repeat(auto-fill, 50%);
  grid-auto-rows: 10px;
  justify-content: center;

  background-color: rgb(133, 189, 170);
}

.home__content > div {
  display: none;
}

.home__item {
  padding: 0;
  margin: 5px;
  border-radius: 16px;
  background-color: rgb(187, 150, 150);
  background-size: cover;
  background-position: center;
  grid-row-end: span 30;
}
.home__item__cover {
  height: 100%;
  width: 100%;
  border-radius: 16px;
  display: flex;
  align-items: flex-end;
}

.home__item__title {
  font-size: 20px;
  width: 100%;
  border-radius: 0 0 16px 16px;
  padding: 10px;
  color: rgb(255, 255, 255);
  background-color: rgba(0, 0, 0, 0.123);
  text-align: center;
}

@media (min-width: 768px) {
  .home__content {
    width: 80vw;
    margin-top: 56px;
    grid-template-columns: repeat(auto-fill, 20%);
  }
  .home__content > div {
    display: block;
  }
  .home__search {
    width: 600px;
    position: relative;
    left: -176px;
  }
  .home__title {
    text-align: center;
  }
  .home__item {
    grid-row-end: span 45;
  }
  .home__item__cover {
    background: radial-gradient(
      circle,
      rgba(7, 2, 29, 0.275) 70%,
      rgba(0, 0, 0, 1) 100%
    );
    opacity: 0;
    cursor: zoom-in;
  }
  .home__item__cover:hover {
    opacity: 1;
    transition: 0.5s;
  }
}
</style>