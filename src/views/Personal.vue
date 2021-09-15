<template>
  <div class="personal__container">
    <Menu />
    <div class="personal__content">
      <div
        v-for="item in arr"
        :key="item.id"
        class="personal__item"
        :style="'background-image: url(' + item.img + ');'"
      >
        <div class="personal__item__cover">
          <div class="personal__item__button">
            <router-link :to="/details/ + item.id"
              ><i class="far fa-eye personal__item__see"></i
            ></router-link>
            <i
              class="far fa-edit personal__item__edit"
              @click="toggleEditOpen(item)"
            ></i>
            <i
              class="fas fa-times personal__item__close"
              @click="onSubmitDelete(item.id)"
            ></i>
          </div>
          <div class="personal__item__title">
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
    <div v-show="isToggleEdit" class="personal__modal__container">
      <div class="personal__modal__content">
        <form @submit.prevent="onSubmitEdit">
          <div>Edit image</div>
          <input type="text" name="address" :value="address" />
          <input type="text" name="title" :value="title" />
          <input type="file" name="img" />
          <img :src="img" alt="" />
          <textarea name="content" :value="content" />
          <input type="button" value="Close" @click="toggleEditClose" />
          <input type="submit" value="Save" />
        </form>
      </div>
    </div>
  </div>

  <button @click="toggleAddOpen" class="personal__modal__add">
    <i class="fas fa-plus"></i><span>Add image </span>
  </button>
  <div v-show="isToggleAdd" class="personal__modal__container">
    <div class="personal__modal__content">
      <form @submit.prevent="onSubmitAdd">
        <div>Add image</div>
        <input type="text" name="address" v-model="address" />
        <input type="text" name="title" v-model="title" />
        <input type="file" name="img" @change="onFileChange" />
        <div class="clear_fix"></div>
        <textarea name="content" v-model="content" />
        <input type="button" value="Close" @click="toggleAddClose" />
        <input type="submit" value="Add" />
      </form>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";

export default {
  data() {
    return {
      isToggleAdd: false,
      isToggleEdit: false,
      address: "",
      title: "",
      img: "",
      content: "",
      file: "",
    };
  },
  components: {
    Menu,
  },
  methods: {
    onFileChange(e) {
      this.file = e.target.files[0];
    },
    toggleAddOpen() {
      this.isToggleAdd = true;
    },
    toggleAddClose() {
      this.isToggleAdd = false;
    },
    onSubmitAdd() {
      this.$store.dispatch("addDestination", {
        data: {
          address: this.address,
          title: this.title,
          img: "",
          content: this.content,
        },
        file: this.file,
      });
      this.isToggleAdd = false;
    },
    toggleEditOpen(item) {
      this.address = item.address;
      this.title = item.title;
      this.img = item.img;
      this.content = item.content;
      this.isToggleEdit = true;
    },
    toggleEditClose() {
      this.isToggleEdit = false;
    },

    onSubmitEdit() {
      this.isToggleEdit = !this.isToggleEdit;
    },
    onSubmitDelete(id) {
      // let result = confirm("Are you sure");
      // if (!result) {
      //   return;
      // }
      let ids = [id];
      this.$store.dispatch("deleteDestination", ids);
    },
  },
  computed: {
    arr() {
      return this.$store.state.personal.arr;
    },
  },
  mounted() {
    this.$store.dispatch("getPersonals");
  },
};
</script>

<style scoped>
.personal__container {
  display: flex;
  justify-content: center;
}

.personal__content {
  width: 100%;
  padding: 15px 15px 0px 15px;
  margin-top: 80px;

  display: grid;
  grid-template-columns: repeat(auto-fill, 50%);
  grid-auto-rows: 10px;
  justify-content: center;

  background-color: rgb(133, 189, 170);
}

.personal__item {
  padding: 0;
  margin: 5px;
  border-radius: 16px;
  background-color: rgb(187, 150, 150);
  background-size: cover;
  background-position: center;
  grid-row-end: span 30;
}

.personal__item__button {
  margin: 10px;
  display: flex;
  justify-content: flex-end;
}
.personal__item__see {
  width: 30px;
  height: 30px;
  background-color: wheat;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.personal__item__edit {
  width: 30px;
  height: 30px;
  background-color: yellow;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.personal__item__close {
  width: 30px;
  height: 30px;
  background-color: red;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.personal__item__cover {
  height: 100%;
  width: 100%;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.personal__item__title {
  font-size: 16px;
  border-radius: 0 0 16px 16px;
  padding: 10px;
  color: rgb(255, 255, 255);
  background-color: rgba(0, 0, 0, 0.123);
  text-align: center;
}

.personal__modal__container {
  width: 100vw;
  height: 100vh;
  background-color: rgba(26, 26, 26, 0.815);

  position: fixed;
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* edit item */

.personal__modal__content form {
  background-color: white;
  padding: 40px;
}

.personal__modal__content div {
  font-size: 24px;
  width: 100%;
  margin-bottom: 20px;
  font-weight: bold;
  text-align: center;
}

.personal__modal__content input[type="text"] {
  width: 300px;
  margin-bottom: 10px;
  padding: 5px 10px;
  display: block;
}
.personal__modal__content input[type="file"] {
  width: 180px;
  margin-bottom: 10px;
  cursor: pointer;
  float: left;
}
.personal__modal__content img {
  margin-bottom: 5px;
  max-height: 100px;
  max-width: 144px;
}
.personal__modal__content textarea {
  width: 300px;
  height: 4em;
  padding: 5px 11px;
  margin-bottom: 10px;
  display: block;
}
.personal__modal__content input[type="button"] {
  width: 50%;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
}
.personal__modal__content input[type="submit"] {
  width: 50%;
  padding: 5px 10px;
  font-weight: bold;
  background-color: green;
  border: 1px solid black;
  cursor: pointer;
}

/* add item */

.personal__modal__add {
  font-size: 18px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid black;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(123, 255, 47, 0.616);
  cursor: pointer;

  position: fixed;
  bottom: 50px;
  right: 20px;
}

.personal__modal__add span {
  display: none;
}

@media (min-width: 768px) {
  .personal__content {
    width: 80vw;
    margin-top: 56px;
    grid-template-columns: repeat(auto-fill, 20%);
  }
  .personal__item {
    grid-row-end: span 45;
  }

  .personal__modal__add {
    padding: 5px 10px;
    border-radius: 15px;
    width: auto;
    padding: 5px 15px;
    left: 0;
    top: 56px;
  }

  .personal__modal__add span {
    margin-left: 5px;
    display: block;
  }
}
</style>