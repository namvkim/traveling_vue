<template>
  <!-- <button @click="redirect">Redirect</button>
  <button @click="back">Back</button>
  <button @click="forward">go forward</button><br /> -->
  <router-view />
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push({ name: "Home" });
    },
    back() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(1);
    },
  },
};
</script>