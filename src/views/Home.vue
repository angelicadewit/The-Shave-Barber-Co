<template>
  <div class="homepage">
    <div class="hero">
      <h2>
        <span>Traditional</span>
        <span>Barber</span>
        <span>Shop</span>
      </h2>
      <img src="../assets/photo.png" alt="">
    </div>
  </div>
</template>




<style scoped lang="scss">
// .homepage{
  // position: absolute;
	// margin: auto;
	// top: 0; 
	// left: 0; 
	// bottom: 0; 
	// right: 0;

	// height: 60vw;
	// background-color: rgba(0, 0, 0, 0.0);

// }

.hero{
	margin: 0% auto;
	display: flex;
  justify-content: center;
  background: url(../assets/demask-background.png) no-repeat;
  background-size: contain;
  padding: 50px;
  position: relative;
  width: 60vw;
  height: 40vw;

  img{
    border: 30px solid black;
    width: 100%;

  }

  h2{
    color: white;
    position: absolute;
  }
}
</style>
