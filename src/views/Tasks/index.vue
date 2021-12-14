<template>
  <v-container
    class="fluid"
  >
    <h1>tasks</h1>
    <div
      v-for="(task, i) in tasks"
      :key="`task-${i}`"
    >
      {{ i+1 }}. {{ task.title }}
    </div>
  </v-container>
</template>

<script>
export default {
  computed: {
    tasks () {
      return this.$store.state.tasks;
    }
  },
  mounted () {
    this.$store.dispatch("fetchTasks");
  }
};
</script>
