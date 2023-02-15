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
</template>

<script>
  export default {
    data() {
      return { watcher: '' };
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
