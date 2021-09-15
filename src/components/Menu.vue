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
          /><span>{{ obj.name }}</span>
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
            <router-link to="/personalfriend" class="index__message">
              <img
                src="https://nhattientuu.com/wp-content/uploads/2020/08/hinh-anh-cute-74.jpg"
                alt=""
              />
              <div>
                <div class="index__name">le son nam</div>
                <div class="index__message__box">
                  <div class="index__message__content">
                    kết bạn với mình nhé
                  </div>
                  <div class="index__message__time">- 355 minutes</div>
                </div>
              </div>
              <div class="message__button">
                <div class="message__button__accept">Accept</div>
                <div class="message__button__cancel">Cancel</div>
              </div>
            </router-link>
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
            <router-link to="/personalfriend" class="index__message">
              <img
                src="https://nhattientuu.com/wp-content/uploads/2020/08/hinh-anh-cute-74.jpg"
                alt=""
              />
              <div>
                <div class="index__name">le son nam</div>
                <div class="index__message__box">
                  <div class="index__message__content">
                    ahihi sdfsdfsdfahihi sdfsdfsdfahihi sdfsdfsdf
                  </div>
                  <div class="index__message__time">- 355 minutes</div>
                </div>
              </div>
            </router-link>
            <router-link to="/personalfriend" class="index__message">
              <img
                src="https://nhattientuu.com/wp-content/uploads/2020/08/hinh-anh-cute-74.jpg"
                alt=""
              />
              <div>
                <div class="index__name">le son nam</div>
                <div class="index__message__box">
                  <div class="index__message__content">
                    ahihi sdfsdfsdfahihi
                  </div>
                  <div class="index__message__time">- 5 years</div>
                </div>
              </div>
            </router-link>
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
            <div @click="logout" class="index__multitasking__item">
              <i class="fas fa-sign-out-alt"></i>Logout
            </div>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router/index";
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
    logout() {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("tokenType");
      router.push("/login");
    },
  },
  computed: {
    obj() {
      return this.$store.state.menu.obj;
    },
  },
  mounted() {
    this.$store.dispatch("getMyUser");
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
  box-shadow: 1px 3px 5px rgba(128, 128, 128, 0.123);

  position: fixed;
  top: 0;
  z-index: 1;
}

.index__box {
  width: 100%;
  padding: 0 20px;
}

.index__block__1 {
  height: 40px;

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
  height: 40px;

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
    background-color: rgb(186, 226, 43) !important;
  }
  .index__user {
    display: flex;
    align-items: center;
    border-radius: 20px;
    margin: 0 3px;
  }
  .index__user:hover {
    background-color: rgb(186, 226, 43);
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
  .index__user.router-link-exact-active {
    background-color: rgb(186, 226, 43);
  }
  .index__toggleDown {
    display: none;
    position: absolute;
    top: 46px;
    right: 0px;
    border-radius: 6px;
    padding: 5px;
    width: 380px;
    max-height: 90vh;
    overflow-y: auto;
    background-color: rgb(224, 224, 224);
  }

  .index__toggleDown > a {
    padding: 10px 10px;
    border-radius: 4px;
  }

  .index__toggleDown a:hover {
    background-color: antiquewhite;
  }

  .index__toggleDown--show {
    display: block;
  }

  .index__message {
    display: flex;
    align-items: center;
  }
  .index__message img {
    height: 50px;
    width: 50px;
    border-radius: 25px;
  }
  .index__message > div {
    margin-left: 10px;
    color: black;
  }
  .index__name {
    padding: 0;
    font-size: 16px;
  }
  .index__message__box {
    padding: 0;
    margin-top: 5px;
    font-size: 14px;
    display: flex;
  }
  .index__message__content {
    max-width: 180px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .index__message__time {
    margin-left: 5px;
  }
  .message__button__accept {
    padding: 8px;
    background-color: blanchedalmond;
  }
  .index__multitasking__item {
    padding: 10px;
    border-radius: 4px;
    display: flex;
    align-items: center;
  }
  .index__multitasking__item i {
    margin-right: 5px;
  }
  .index__multitasking__item:hover {
    cursor: pointer;
    background-color: wheat;
  }
}
</style>