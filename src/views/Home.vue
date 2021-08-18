<template>
  <div class="home">
    <Menu />
    <p>this is home</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Menu from "@/components/Menu.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Menu,
  },
};
</script>
<style scoped>
p {
  margin-top: 200px;
}
</style>