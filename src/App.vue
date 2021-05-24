<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <LeftPanel/>
    <MiddlePanel/>
    <RightPanel/>

    <div class="popup_container" v-if="is_countdown_popup_open">
      <div class="modal_background"  v-on:click="close_popup()"></div>
      <CountdownPopup></CountdownPopup>
    </div>
  </div>
</template>

<script>
import LeftPanel from "@/components/LeftPanel/LeftPanel";
import MiddlePanel from "@/components/MiddlePanel/MiddlePanel";
import RightPanel from "@/components/RightPanel/RightPanel";
import CountdownPopup from "@/components/Popup/CountdownPopup";
import {popup_store} from '@/store/popup_store';

export default {
  name: 'App',
  components: {
    CountdownPopup,
    RightPanel,
    MiddlePanel,
    LeftPanel,
  },
  computed: {
    is_countdown_popup_open () {
      return popup_store.getters.is_countdown_popup_open
    }
  },
  methods: {
    close_popup() {
      popup_store.commit('close_countdown_popup') // TODO : Constante
    }
  }
}
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
}

.popup_container{
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 1000;
}

.modal_background {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #000000;
  opacity: 0.4;
}
</style>
