<template>
  <div
    class="modal_box"
    @click.self="toggleModal"
    :class="{ active: theme === 'abc' }"
  >
    <div class="modal_content">
      <h1>{{ content }}</h1>
      <slot></slot>
      <slot name="xxx"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["content", "theme"],
  methods: {
    toggleModal() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.modal_box {
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(128, 128, 128, 0.253);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal_content {
  background-color: greenyellow;
  width: 500px;
  height: 400px;
}
</style>