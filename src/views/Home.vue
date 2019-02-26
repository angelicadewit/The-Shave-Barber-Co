<template>
  <div class="homepage">
    <div class="hero">
      <h2>
        <div class="top">
          <span>Traditional</span>
        </div>
        <div class="bottom">
          <span>Barber</span>
          <span>Shop</span>
        </div>
      </h2>
      <img src="../assets/photo.png" alt="">
    </div>
  </div>
</template>




<style scoped lang="scss">

.hero{
	margin: 3% auto;
	display: flex;
  justify-content: center;
  background: url(../assets/demask-background.png) no-repeat;
  background-size: contain;
  padding: 50px;
  position: relative;
  width: 70vw;
  height: 40vw;

  @include tablet{
    width: 60vw;
    height: 40vw;
  }

  img{
    border: 30px solid black;
    width: 100%;

  }

  h2{
    color: white;
    position: relative;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1rem;
    margin-block-start: 0.0em;
    margin-block-end: 0.0em;
    text-align: center;
    

    @include tablet{
      font-size: 2.3rem;
      display: flex;
      justify-content: center;
    }
  
    span{
        display: block;
    }
  }

  .top,
  .bottom{
    position: absolute;
    margin: 2%;
  }
  
  .top{
    left: 0;
  }

  .bottom{
    bottom: 0;
    left: 50%;
    transform: translateX(14%);
    margin: 0 auto;

    span{
      letter-spacing: 2rem;
    }
  }
}
</style>
