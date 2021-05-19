<template>
  <div id="logbook">
    <Log v-for="log in $store.getters.logs" :key="'quest'+log.id" :log="log"></Log>
  </div>
</template>

<script>
import Log from "@/components/MiddlePanel/Log";
export default {
  name: "Logbook",
  components: {Log},
  created: function() {
    setTimeout(function() {
      var logbook = document.getElementById("logbook");
      console.log(logbook.style)
      logbook.scrollTop = logbook.offsetHeight + 1000;
    }, 100)
    this.$store.subscribe((mutation) => {
      if (mutation.type == 'update_log' || mutation.type == 'delete_log' || mutation.type == 'add_logs') { // TODO : Mettre des constantes
        setTimeout(function() {
          var logbook = document.getElementById("logbook");
          console.log(logbook.style)
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
