<script>
  import RoverList from '../components/RoverList.vue';
  import goBack from '../components/goBack.vue';

  export default {
    components: {
      RoverList,
      goBack,
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
    <goBack class="goBackButton" />

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
    background-color: black;
    color: white;
    border-radius: 35px;
    border: none;
    cursor: pointer;
    padding: 15px 15px;
    font-size: medium;
    margin: 0.5rem;
  }
</style>
