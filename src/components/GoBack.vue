<template>
  <button class="goBackButton" @click="goBack">Back</button>
</template>

<script>
  export default {
    methods: {
      goBack() {
        return this.$router.go(-1);
      },
    },
  };
</script>

<style lang="scss"></style>
