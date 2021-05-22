<template>
  <div class="content quest">
    <div class="title">
      {{quest.title}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Quest",
  props: {
    quest: Object
  },
  methods : {
  }
}
</script>

<style scoped>
.content {
  width : 260px;
  border-radius: 8px;
  padding: 4px 8px;
  color: #000000;
  font-family: 'Roboto', sans-serif;
}

.title {
  padding-bottom: 4px;
  padding-left: 8px;
}

/* QUEST */
.quest {
  border: solid #673ab7 2px;
  background-color: rgba(103,58,183, 0.2);
  margin-bottom: 4px;
  font-size: 0.8em;
}
</style>
