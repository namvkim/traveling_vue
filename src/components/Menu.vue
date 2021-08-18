<template>
  <div class="index__menu">
    <div class="index__box">
      <div class="index__block__1">
        <div class="index__logo">
          <router-link to="/"
            ><img
              src="https://www.shareicon.net/data/256x256/2015/09/20/643595_tree_512x512.png"
              alt=""
            />
            <span>Traveling</span>
          </router-link>
        </div>
        <div class="index__search">
          <input type="text" placeholder="Search in Traveling" />
          <router-link to="/search"><i class="fas fa-search"></i></router-link>
          <router-link to="/multitasking"
            ><i class="fas fa-bars"></i
          ></router-link>
        </div>
      </div>
      <div class="index__block__2">
        <router-link to="/"><i class="fas fa-home"></i></router-link>
        <router-link to="/schedule"
          ><i class="fas fa-calendar-check"></i
        ></router-link>
        <router-link to="/friend"
          ><i class="fas fa-user-friends"></i
        ></router-link>
        <router-link to="/message"
          ><i class="fas fa-comment-alt"></i
        ></router-link>
        <router-link to="/notificate"><i class="fas fa-bell"> </i></router-link>
      </div>
      <div class="index__block__3">
        <router-link to="/"><i class="fas fa-home"></i></router-link>
        <router-link to="/schedule"
          ><i class="fas fa-calendar-check"></i
        ></router-link>
      </div>
      <div class="index__block__4">
        <router-link to="/personal" class="index__user">
          <img
            src="https://marum.vn/data/avatars/o/0/14.jpg?1604292865"
            alt="avatar"
          /><span>le son nam</span>
        </router-link>
        <span :class="{ 'index__block__4--light': toggleDown === 'friend' }">
          <i
            class="fas fa-user-friends"
            @click="toggleDownClick"
            id="friend"
          ></i>
          <div
            class="index__toggleDown"
            :class="{
              'index__toggleDown--show ': toggleDown === 'friend',
            }"
          >
            <div>abc</div>
            <div>xyz</div>
          </div>
        </span>
        <span :class="{ 'index__block__4--light': toggleDown === 'comment' }">
          <i
            class="fas fa-comment-alt"
            @click="toggleDownClick"
            id="comment"
          ></i>
          <div
            class="index__toggleDown"
            :class="{ 'index__toggleDown--show': toggleDown === 'comment' }"
          >
            <div>abc comment</div>
            <div>xyz</div>
          </div>
        </span>
        <span
          :class="{ 'index__block__4--light': toggleDown === 'notificate' }"
        >
          <i class="fas fa-bell" @click="toggleDownClick" id="notificate"></i>
          <div
            class="index__toggleDown"
            :class="{ 'index__toggleDown--show': toggleDown === 'notificate' }"
          >
            <div>abc notificate</div>
            <div>xyz</div>
          </div>
        </span>
        <span
          :class="{ 'index__block__4--light': toggleDown === 'multitasking' }"
        >
          <i
            class="fas fa-caret-down"
            @click="toggleDownClick"
            id="multitasking"
          ></i>
          <div
            class="index__toggleDown"
            :class="{
              'index__toggleDown--show': toggleDown === 'multitasking',
            }"
          >
            <div>abc multitasking</div>
            <div>xyz</div>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleDown: "",
    };
  },
  methods: {
    toggleDownClick(e) {
      if (this.toggleDown === e.target.id) {
        this.toggleDown = "";
      } else {
        this.toggleDown = e.target.id;
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");

i {
  font-size: 20px;
}

.index__menu {
  width: 100%;
  background-color: antiquewhite;
  display: flex;
  align-items: center;

  position: fixed;
  top: 0;
  z-index: 1;
}

.index__box {
  width: 100%;
  padding: 0 20px;
}

.index__block__1 {
  height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.index__logo img {
  display: none;
}

.index__logo span {
  font-size: 24px;
  color: green;
  font-family: "Lobster";
}

.index__search {
  position: relative;
  display: flex;
  align-items: center;
}

.index__search a {
  margin-left: 20px;
}

.index__search input {
  display: none;
}

.index__block__2 {
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}
.index__block__2 a.router-link-exact-active i {
  color: rgb(16, 195, 207);
}

.index__block__3,
.index__block__4 {
  display: none;
}

@media (min-width: 768px) {
  .index__menu {
    height: 56px;
  }

  .index__box {
    display: flex;
    justify-content: center;
    position: relative;
  }

  .index__block__1 {
    position: absolute;
    left: 20px;

    height: auto;
    justify-content: left;
  }
  .index__logo img {
    height: 40px;
    display: block;
  }

  .index__logo span {
    display: none;
  }

  .index__search input[type="text"] {
    font-size: 16px;
    width: 200px;
    padding: 11px 15px;
    margin-left: 20px;
    border-radius: 19px;

    border: none;
    outline: none;
    position: absolute;
    display: block;
  }

  .index__search input[type="text"]:focus {
    width: 300px;
    transition: ease-in 0.5s;
  }

  .index__search i,
  .index__search label {
    display: none;
  }
  .index__block__2 {
    display: none;
  }

  .index__block__3 {
    display: flex;
    align-items: center;
  }
  .index__block__3 a {
    padding: 10px 150px;
    border-radius: 6px;
  }
  .index__block__3 a:hover {
    background-color: gray;
  }
  .index__block__3 a.router-link-exact-active {
    background-color: rgb(186, 226, 43);
  }
  .index__block__4 {
    position: absolute;
    right: 20px;

    display: flex;
    align-items: center;
  }

  .index__block__4 i {
    cursor: pointer;
  }
  .index__block__4 > span {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    margin: 0 3px;
    background-color: grey;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .index__block__4--light {
    background-color: rgb(109, 194, 53) !important;
  }
  .index__user {
    display: flex;
    align-items: center;
    border-radius: 20px;
    margin: 0 3px;
  }
  .index__user:hover {
    background-color: blueviolet;
  }
  .index__user img {
    height: 40px;
    border-radius: 20px;
  }
  .index__user span {
    padding: 0 5px;
    width: auto;
    font-weight: 600;
    color: black;
  }
  .index__toggleDown {
    display: none;
    position: absolute;
    top: 46px;
    right: 0px;
    border-radius: 6px;
    padding: 5px;
    width: 360px;
    background-color: aqua;
  }
  .index__toggleDown div {
    padding: 5px 10px;
    border-radius: 4px;
  }

  .index__toggleDown div:hover {
    background-color: antiquewhite;
  }

  .index__toggleDown--show {
    display: block;
  }
}
</style>