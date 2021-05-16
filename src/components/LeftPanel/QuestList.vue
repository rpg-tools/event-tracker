<template>
  <div class="quest_list">
    <Quest v-for="quest in $store.getters.quests" :key="quest.id" :quest="quest"></Quest>
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
.quest_list {
  height: 400px;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
