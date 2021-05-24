<template>
  <div class="right_panel">
    <Session></Session>
    <Countdown></Countdown>
  </div>
</template>

<script>
import Session from "@/components/RightPanel/Session";
import Countdown from "@/components/RightPanel/Countdown";
export default {
name: "RightPanel",
  components: {Countdown, Session}
}
</script>

<style scoped>
.right_panel {
  width: 200px;
  height: 100%;
  background-color: #ccc;
  border-right: solid #2c3e50 1px;
  box-shadow: 0px 0px 5px rgba(0,0,0,0.5);
  color: #ffffff;
  padding: 20px 20px;
  z-index: 10;
}

</style>
