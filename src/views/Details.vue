<template>
  <Menu />
  <h2>details page {{ id }}</h2>
</template>

<script>
import Menu from "@/components/Menu.vue";
export default {
  props: ["id"],
  components: {
    Menu,
  },
};
</script>

<style scoped>
h2 {
  margin-top: 200px;
}
</style>