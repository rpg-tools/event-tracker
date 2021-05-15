<template>
  <div>
    <DayLight_Clock></DayLight_Clock>
    <Time_Clock></Time_Clock>
  </div>
</template>

<script>
import DayLight_Clock from "@/components/DayLight_Clock";
import Time_Clock from "@/components/Time_Clock";
export default {
  name: 'Clock',
  components: {Time_Clock, DayLight_Clock},
  props: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
