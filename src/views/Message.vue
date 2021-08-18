<template>
  <Menu />
  <p>this is message</p>
</template>

<script>
import Menu from "@/components/Menu.vue";

export default {
  components: {
    Menu,
  },
};
</script>

<style scoped>
p {
  margin-top: 200px;
}
</style>