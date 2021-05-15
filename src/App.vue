<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <LeftPanel/>
  </div>
</template>

<script>
import LeftPanel from "@/components/LeftPanel/LeftPanel";

export default {
  name: 'App',
  components: {
    LeftPanel,
  }
}
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
