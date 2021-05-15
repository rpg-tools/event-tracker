<template>
  <div class="left_panel">
    <clock></clock>
    <Time_Form></Time_Form>
  </div>
</template>

<script>
import Clock from "@/components/LeftPanel/Clock";
import Time_Form from "@/components/LeftPanel/Time_Form";
export default {
  name: 'LeftPanel',
  components: {
    Time_Form,
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
  width: 300px;
  height: 100%;
  background-color: #92B6D1;
  border-right: solid #2c3e50 1px;
  box-shadow: 0px 0px 5px rgba(0,0,0,0.5);
  color: #ffffff;
  padding: 20px 20px;
  z-index: 10;
}
</style>
