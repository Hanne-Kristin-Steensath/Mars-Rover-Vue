<script>
  import ContactForm from '../components/ContactForm.vue';

  export default {
    components: {
      ContactForm,
    },
  };
</script>

<template>
  <div>
    <div class="routerParams">{{ $route.params.parameter }}</div>
    <contact-form />
  </div>
</template>

<style lang="scss">
  .routerParams {
    font-size: 35px;
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
