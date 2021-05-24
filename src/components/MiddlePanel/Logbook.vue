<template>
  <div id="logbook">
    <Log v-for="log in $store.getters.logs" :key="'quest'+log.id" :log="log"></Log>
  </div>
</template>

<script>
import Log from "@/components/MiddlePanel/Log";
import {MUTATION_LOGS_ADD, MUTATION_LOGS_DELETE, MUTATION_LOGS_UPDATE} from "@/constants/mutations_event";

export default {
  name: "Logbook",
  components: {Log},
  created: function() {
    setTimeout(function() {
      var logbook = document.getElementById("logbook");
      logbook.scrollTop = logbook.offsetHeight + 1000;
    }, 100)
    this.$store.subscribe((mutation) => {
      if (mutation.type == MUTATION_LOGS_UPDATE || mutation.type == MUTATION_LOGS_DELETE || mutation.type == MUTATION_LOGS_ADD) {
        setTimeout(function() {
          var logbook = document.getElementById("logbook");
          logbook.scrollTop = logbook.offsetHeight + 1000;
        }, 100)
      }
    });
  }
}
</script>

<style scoped>
#logbook {
  width: 100%;
  height: calc(100% - 200px);
  overflow-x: hidden;
  overflow-y: scroll;
  font-family: 'Roboto', sans-serif;
  scroll-behavior: smooth;
}
</style>
