<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <Clock/>
  </div>
</template>

<script>
import Clock from './components/Clock.vue'

export default {
  name: 'App',
  components: {
    Clock
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
