<template>
  <div class="logbook">
    <Log v-for="log in $store.getters.logs" :key="'quest'+log.id" :log="log"></Log>
  </div>
</template>

<script>
import Log from "@/components/MiddlePanel/Log";
export default {
  name: "Logbook",
  components: {Log}
}
</script>

<style scoped>
.logbook {
  width: 100%;
  height: calc(100% - 200px);
  overflow-x: hidden;
  overflow-y: scroll;
  font-family: 'Roboto', sans-serif;
  scroll-behavior: smooth;
}
</style>
