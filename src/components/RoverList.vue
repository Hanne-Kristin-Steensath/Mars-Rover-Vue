<script>
  import axios from 'axios';

  export default {
    props: {
      roverName: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        info: [],
        numPhotos: '',
      };
    },

    computed: {
      slicedInfo() {
        if (this.numPhotos === '' || this.numPhotos === null) {
          return this.info.slice(0, 10);
        } else {
          return this.info.slice(0, this.numPhotos);
        }
      },
    },

    created() {
      this.fetchData();
    },
    methods: {
      async fetchData() {
        let rover = this.roverName;

        const { data } = await axios.get(
          'https://api.nasa.gov/mars-photos/api/v1/rovers/' +
            rover +
            '/photos?sol=1000&api_key=XaHjygd1hAaVWDBRT8YGhtJJjg8Y7oQDb70iBdju',
        );

        this.info = data.photos;
      },
    },
  };
</script>

<template>
  <div class="roverinputImage">
    <div class="roverNameInput">
      <p class="roverNameL">{{ this.roverName.toUpperCase() }}</p>
      <p class="roverTextP">How many photos do you want in the sliding show?</p>
      <input class="inputNr" type="text" v-model="numPhotos" />
    </div>

    <div
      id="carouselExampleSlidesOnly "
      class="carousel slide"
      data-mdb-interval="true"
      data-bs-ride="carousel"
      data-bs-interval="2000"
      data-bs-pause="false"
    >
      <div class="carousel-inner">
        <div
          v-for="(image, index) in slicedInfo"
          :key="image.index"
          class="carousel-item"
          :class="index === 0 ? 'active' : ''"
        >
          <img class="d-block w-50" :src="image.img_src" alt="Rover image" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .carousel {
    overflow: hidden;
    height: 400px;
    width: 1700px;
    margin-left: 55rem;
  }

  .roverNameL {
    color: black;
    font-size: 7rem;
    margin: 0px;
  }

  .roverNameInput {
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .inputNr {
    margin-bottom: 2.5rem;
    text-align: center;
  }

  .roverTextP {
    font-size: 1.25rem;
  }

  .roverinputImage {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
