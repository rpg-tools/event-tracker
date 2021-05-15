<template>
  <div class="middle_panel">
    <Logbook/>
    <LogForm/>
  </div>
</template>

<script>
import Logbook from "@/components/MiddlePanel/Logbook";
import LogForm from "@/components/MiddlePanel/LogForm";
export default {
name: "MiddlePanel",
  components: {LogForm, Logbook}
}
</script>

<style scoped>
.middle_panel {
  width: calc(100% - 300px - 200px);
  height: 100%;
  background-color: rgba(204, 233, 255, 0.5);
  border-right: solid #2c3e50 1px;
  box-shadow: 0px 0px 5px rgba(0,0,0,0.5);
  color: #ffffff;
  padding: 20px 20px;
}

</style>
