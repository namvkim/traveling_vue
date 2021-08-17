<template>
  {{ name }}
  <input type="text" ref="user" />
  <button @click="handleClick">click me</button>
  <button @click="toggleModal">open modal</button>
  <Modal v-if="modal" content="hi hihi" @close="toggleModal" theme="abc">
    <h1>slot nè</h1>
    <template v-slot:xxx> slot xxx </template>
  </Modal>
</template>

<script>
import Modal from "./Model.vue";
export default {
  data() {
    return {
      name: "nam",
      modal: false,
    };
  },
  components: {
    Modal,
  },
  methods: {
    handleClick() {
      console.log(this.$refs.user);
      this.$refs.user.classList.add("abc");
      this.$refs.user.focus();
    },
    toggleModal() {
      this.modal = !this.modal;
    },
  },
};
</script>

<style>
</style>