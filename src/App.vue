<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <LeftPanel/>
    <MiddlePanel/>
    <RightPanel/>
  </div>
</template>

<script>
import LeftPanel from "@/components/LeftPanel/LeftPanel";
import MiddlePanel from "@/components/MiddlePanel/MiddlePanel";
import RightPanel from "@/components/RightPanel/RightPanel";

export default {
  name: 'App',
  components: {
    RightPanel,
    MiddlePanel,
    LeftPanel,
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
</style>
