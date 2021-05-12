<template>
  <div>
    <DayLight_Clock :hour="hour"></DayLight_Clock>
    <div class="time">

    </div>
  </div>
</template>

<script>
import DayLight_Clock from "@/components/DayLight_Clock";
export default {
  name: 'Clock',
  components: {DayLight_Clock},
  props: {
    hour: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
