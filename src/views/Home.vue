<template>
  <div class="homepage">
    <div class="hero">
    <div class="a-letter"></div>
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

.a-letter{
  background: url(../assets/a.png) no-repeat;
  background-size: contain;
  opacity: 0.8;
  width: 25vw;
  height: 25vw;
  position: absolute;
  top: -25px;
  left: -20px;
  
  @include desktop{
    top: -75px;
    left: -70px;
  }
}

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

  @include bg-desktop{
    width: 50vw;
    height: 30vw;
  }

  img{
    border: 30px solid black;
    width: 100%;

  }

  h2{
    color: white;
    position: relative;
    font-size: 6vw;
    text-transform: uppercase;
    letter-spacing: 1rem;
    margin-block-start: 0.0em;
    margin-block-end: 0.0em;
    text-align: center;
    

    @include bg-desktop{
      font-size: 5.5vw;
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
    left: 40px;
  }

  .bottom{
    bottom: 0;
    left: 40px;
    margin: 0 auto;

    span{
      letter-spacing: 2rem;

      @include desktop{
        letter-spacing: 4rem;
        
      }
    }
  }
}
</style>
