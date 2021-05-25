<template>
  <v-app>
    <v-card class="overflow-hidden" style="height: 100%;">
      <v-app-bar fixed color="#00000000" flat style="min-width: 200px">
        <v-toolbar-title style="color: black; font-size: 36px; font-weight: bold;" v-scroll-to="'#topPage'" to>ぽーとふぉりお</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon large @click="openTab('github')">
          <v-icon style="color: black;">
            mdi-github
          </v-icon>
        </v-btn>
        <v-btn icon large @click="openTab('insta')">
          <v-icon style="color: black;">
            mdi-instagram
          </v-icon>
        </v-btn>
        <v-btn icon large @click="openTab('twitter')">
          <v-icon style="color: black;">
            mdi-twitter
          </v-icon>
        </v-btn>
      </v-app-bar>
      <v-sheet style="margin-top: 64px;" id='scrolling'>
        <v-main>
          <transition name="fade">
            <router-view v-show="show"></router-view>
          </transition>
          <footer style="position: relative; margin-bottom: 0;" id="content1">
            © 2021 Honda Daiki
          </footer>
        </v-main>
      </v-sheet>
    </v-card>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    show: true,
    collapseOnScroll: true,
    navi: false
  }),
  created(){
  },
  methods: {
    openTab(val) {
      switch(val){
        case 'github':
          window.open("https://github.com/hond0413")
          return
        case 'insta':
          window.open("https://www.instagram.com/hon_d04_13/?hl=ja")
          return
        case 'twitter':
          window.open("https://twitter.com/hon_d7174")
          return
      }
    },
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@500&display=swap');
#app {
  font-family: 'Shippori Mincho', serif;
  background: #fff9e7;
  box-shadow: inset 0 0 30px rgba(230,220,190,1);
  font-size: 28px;
}
.vertical{
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
}
footer{
  width: 100%;
  font-size: 16px;
  position: absolute;
  bottom: 0px; 
  text-align: center;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
