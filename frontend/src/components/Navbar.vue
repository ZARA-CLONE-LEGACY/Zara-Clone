<template>
  <header
    style="width: 100%; padding: 12px 24px 20px 24px; position: fixed; margin: 0px;"
  >
    <div
      id="headerContents"
      style="display: flex; justify-content: space-between; width: 100%; position: fixed;"
    >
      <div id="headerLeft" style="display: flex;">
        <div>
          <input
            type="image"
            name="menu"
            src="https://icon-library.com/images/menu-icon-png-3-lines/menu-icon-png-3-lines-14.jpg"
            id="menu"
            style="width: 30px; height: 30px; margin-right: 30px;"
            @click="toggleMenu"
          />
        </div>
        <router-link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg"
            alt="Zara_Logo"
            id="logo"
            style="width: 212px;"
          />
        </router-link>
      </div>
      <div
        id="headerRight"
        style="width: 30%; display: flex; margin-right: 30px; padding: 10px; justify-content: space-between;"
      >
        <div id="headerRightLeft">
          <router-link
            to="/search"
            style="padding: 0% 60% 0% 0%; font-size: 13px; text-decoration: none; border-bottom: 1px solid black; color: rgb(41, 41, 41); font-weight: 700; font-family: Neue-Helvetica, Helvetica, Arial, Sans-Serif; font-stretch: ultra-condensed;"
          >
            <span class="menuLink">SEARCH</span>
          </router-link>
        </div>
        <div id="headerRightRight">
        
          <router-link
             to="/Login"
            style="text-decoration: none; padding: 0px 10px 0px 10px; font-size: 13px; color: rgb(41, 41, 41); font-weight: 100; font-family: Neue-Helvetica, Helvetica, Arial, Sans-Serif; font-stretch: ultra-condensed;"
          >
            <span class="menuLink">LOG IN</span>
          </router-link>
          <router-link
            to="/help"
            style="text-decoration: none; padding: 0px 10px 0px 10px; font-size: 13px; color: rgb(41, 41, 41); font-weight: 100; font-family: Neue-Helvetica, Helvetica, Arial, Sans-Serif; font-stretch: ultra-condensed;"
          >
            <span class="menuLink">HELP</span>
          </router-link>
          <router-link
            to="/cart"
            style="text-decoration: none; padding: 0px 10px; font-size: 13px; color: rgb(41, 41, 41); font-weight: 100; font-family: Neue-Helvetica, Helvetica, Arial, Sans-Serif; font-stretch: ultra-condensed;"
          >
            <img
              style="width: 22px; height: 19px;"
              src="https://cdn-icons-png.flaticon.com/512/3110/3110065.png"
              alt="Cart"
            />
          </router-link>
        </div>
      </div>
    </div>
  </header>
  <div v-if="isMenuOpen" id="menuModal" class="menuOpacity animatedMenuShow">
    <div class="menuContent">
      <header
        id="headerRight"
        style="width: 1000%; display: flex; margin-right: 30px; padding: 10px; justify-content: space-between;"
      >
        <div id="menuTop"></div>
      </header>
      <div
        id="menuOptions"
        style="position: fixed; overflow: hidden; height: 4000px; width: 470px; background-color: white; margin-top: -30px; margin-left: -20px;"
      >
        <div id="menuMainOptions" style="display: flex;">
          <ul class="menuOptionsList">
            <li class="close" @click="toggleMenu" style="margin-right: 100px; margin-left: -18px; font-size: 21px; color: grey;">
              ✕
            </li>
            <div style="margin-top: 90px; display: flex; flex-wrap: wrap; margin-bottom: 25px;">
              <p class="menuOption" style="margin-left: -10px; margin-top: -40px; font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif; color: grey; font-size: 11px; cursor: pointer;" @click="toggleShow">
                WOMAN
              </p>
              <p class="menuOption" style="margin-right: 20px; margin-top: -40px; margin-left: 25px; font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif; color: rgb(134, 134, 134); font-size: 11px; cursor: pointer;" @click="toggleDisplay">
                MEN
              </p>
              <p class="menuOption" style="margin-right: 20px; margin-top: -40px; font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif; color: rgb(134, 134, 134); font-size: 11px; cursor: pointer;" @click="toggleShowKid">
                CHILDREN
              </p>
              <p class="menuOption" style="margin-right: 10px; margin-top: -40px; font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif; color: rgb(134, 134, 134); font-size: 11px; cursor: pointer;" @click="toggleShowBeauty">
                BEAUTY
              </p>
            </div>
            <li class="menuOption" style="margin-top: -20px; fontsize: 20px;">NEW</li>
            <div class="menuOption" v-if="display">
              <Men/>
            </div>
            <div class="menuOption" v-if="show">
              <Woman />
            </div>
            <div class="menuOption" v-if="showKid">
              <Kid/>
            </div>
            <div class="menuOption" v-if="showBeauty" style="text-decoration: none; cursor: default;">
              <Beauty />
            </div>
            <div id="menuExtraOptions">
              <ul>
                <li>JOIN LIFE</li>
                <li>+ INFO</li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Men from './Men.vue';
import Woman from './Woman.vue';
import Kid from './Kid.vue'
export default {
  data() {
    return {
      isMenuOpen: false,
      data: [],
      display: false,
      show: false,
      showKid: false,
      showBeauty: false
    };
  },
  components:{
    Men,
    Woman,
    Kid
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleDisplay() {
      this.display = !this.display;
      this.show = false;
      this.showKid = false;
      this.showBeauty = false;
    },
    toggleShow() {
      this.show = !this.show;
      this.display = false;
      this.showKid = false;
      this.showBeauty = false;
    },
    toggleShowKid() {
      this.showKid = !this.showKid;
      this.display = false;
      this.show = false;
      this.showBeauty = false;
    },
    toggleShowBeauty() {
      this.showBeauty = !this.showBeauty;
      this.showKid = false;
      this.display = false;
      this.show = false;
    },
    fetchData() {
      axios
        .get('http://localhost:3000/product/')
        .then(response => {
          this.data = response.data;
          console.log(this.data)
        })
        .catch(error => {
          console.error(error);
        });
    }
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>

</style>
