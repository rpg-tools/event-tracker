<template>
  <div class="quest_list_container">
    <div class="title">QUESTS</div>
    <div class="quest_list">
      <Quest v-for="quest in $store.getters.quests" :key="quest.id" :quest="quest"></Quest>
    </div>
  </div>
</template>

<script>
import Quest from "@/components/LeftPanel/Quest";
export default {
name: "QuestList",
  components: {Quest}
}
</script>

<style scoped>
.quest_list_container {
  height: 400px;
  width : 280px;
  overflow-x: hidden;
  overflow-y: auto;
}

.quest_list_container > .title {
  width: 100%;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  color: #ffffff;
  background-color: #673ab7;
  margin-bottom: 4px;
  padding-top: 4px;
  padding-bottom: 4px;
  border-radius: 4px;
}
</style>
