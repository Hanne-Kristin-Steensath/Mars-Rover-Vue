<template>
  <div class="vgDiv">
    <div class="Emithandle"><sub-console @custom-change="handleEmit" /></div>

    <div class="textInput">
      <textarea v-model="text" />
      {{ text }}
    </div>
  </div>
</template>

<script>
  import SubConsole from './SubConsole.vue';

  export default {
    components: {
      SubConsole,
    },

    computed: {
      text: {
        get() {
          return this.$store.state.text;
        },
        set(value) {
          this.$store.commit('updateText', value);
        },
      },
    },
    methods: {
      handleEmit(payload) {
        console.log('Parent payload: ', payload);
      },
      onClick() {
        this.$store.commit('increment');
      },
    },
  };
</script>

<style lang="scss" scoped>
  .vgDiv {
    margin-left: 1rem;
    margin-left: 3rem;
    display: flex;
    flex-direction: column;
  }

  .Emithandle {
    margin: 1rem;
  }
  .textInput {
    margin: 1rem;
  }
</style>
