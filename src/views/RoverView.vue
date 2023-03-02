<script>
  import RoverList from '../components/RoverList.vue';
  import GoBack from '../components/GoBack.vue';

  export default {
    components: {
      RoverList,
      GoBack,
    },
    props: {
      roverName: {
        type: String,
        required: true,
      },
    },
  };
</script>

<template>
  <div class="RoverPageContainer bg-image">
    <GoBack class="goBackButton" />

    <div class="roverListImage">
      <RoverList :rover-name="roverName" />
    </div>
  </div>
</template>

<style lang="scss">
  .RoverPageContainer {
    background-image: url('/assets/astronaut-mars-collage.jpg');
    height: 100vh;
    background-size: 100%;
    width: 100%;
    background-repeat: no-repeat;
    margin: 0px;
    color: white;
  }

  .goBackButton {
    color: white;
    border-radius: 35px;
    border: none;
    cursor: pointer;
    padding: 15px 15px;
    font-size: medium;
    margin: 0.5rem;
  }
</style>
