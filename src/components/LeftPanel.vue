<template>
  <div class="left_panel">
    <clock class="clock" hour="22"></clock>
  </div>
</template>

<script>
import Clock from "@/components/Clock";
export default {
  name: 'LeftPanel',
  components: {
    Clock
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left_panel {
  width: 350px;
  height: 100%;
  background-color: #92B6D1;
  border-right: solid #2c3e50 1px;
  box-shadow: 0px 0px 5px rgba(0,0,0,0.5);
  color: #ffffff;
}

.clock{
  padding: 25px 20px;
}
</style>
