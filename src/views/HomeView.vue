<template>
  <div class="Menucontainer bg-image">
    <div class="introText">
      <h1>MARS</h1>
      <h3>Choose which rovers on Mars you want to visit:</h3>
    </div>
    <div class="buttonContainer">
      <RouterLink to="/curiosity">
        <button class="buttonHome">CURIOSITY</button>
      </RouterLink>
      <RouterLink to="/spirit">
        <button class="buttonHome">SPIRIT</button>
      </RouterLink>
      <RouterLink to="/opportunity">
        <button class="buttonHome">OPPORTUNITY</button>
      </RouterLink>
      <RouterLink to="/subscribeview/Welcome">
        <button class="buttonHome">VG</button>
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  $button-color: rgb(0, 0, 0);

  .Menucontainer {
    background-image: url('/assets/astronaut.jpg');
    height: 100vh;
    background-size: 100%;
    width: 100%;
    background-repeat: no-repeat;
    margin: 0px;
  }
  .buttonHome {
    background-color: $button-color;
    color: white;
    margin: 1rem;
    padding: 25px 60px;
    font-size: large;
    border-radius: 6px;
    border: none;
    cursor: pointer;
  }

  .buttonContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16rem;
  }
  .introText {
    display: flex;
    align-self: flex-start;
    margin-left: 1rem;
    flex-direction: column;
  }

  .introText h1 {
    font-size: 10rem;
    margin: 0px;
  }

  .introText h3 {
    margin: 0rem;
  }
</style>
