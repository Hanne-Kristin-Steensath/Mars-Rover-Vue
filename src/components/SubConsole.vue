<template>
  <div>
    <p>{{ 'costume event and watcher:' }}</p>
    <input
      v-model="watcher"
      type="text"
      placeholder="skriv noe her"
      @change="sendChange"
    />
  </div>

  <button @click="randomButton = !randomButton">Hei</button>

  <h1 v-if="randomButton">Heisann</h1>
  <h1 v-else>hade!</h1>
</template>

<script>
  export default {
    data() {
      return { watcher: '', randomButton: true };
    },
    watch: {
      watcher() {
        console.log(this.watcher);
      },
    },
    emits: ['custom-change'],
    methods: {
      sendChange(event) {
        console.log('Emitting value: ', event.target.value);
        this.$emit('custom-change', event.target.value);
      },
    },
  };
</script>
