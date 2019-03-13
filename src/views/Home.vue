<template>
  <div class="homepage">
    <div class="hero">
    <div class="a-letter"></div>
      <h2 class="top">
        <span>T</span><span>r</span><span>a</span><span>d</span><span>i</span><span>t</span><span>i</span><span>o</span><span>n</span><span>a</span><span>l</span>
      </h2>
      <h2 class="bottom">
        <span class="first-line">
          <span>B</span><span>a</span><span>r</span><span>b</span><span>e</span><span>r</span>
        </span>
        <span class="second-line">
          <span>&nbsp;</span><span>S</span><span>h</span><span>o</span><span>p</span><span>&nbsp;</span>
        </span>
      </h2>
      <img src="../assets/photo.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'It Pays To Look Good.',
    }
  }
}
</script>



<style scoped lang="scss">



.a-letter{
  background: url(../assets/a.png) no-repeat;
  background-size: contain;
  mix-blend-mode: multiply;
  position: absolute;
  width: 25vw;
  height: 25vw;
  top: -75px;
  left: -70px;
  display: none;

  
  @include desktop{
    display: block;
  }
}

.hero{
	margin: 1% auto;
	// display: flex;
  // justify-content: center;
  background: url(../assets/demask-background.png) no-repeat;
  background-size: contain;
  padding: 50px;
  position: relative;
  width: 70vw;
  max-width: 800px;
  // max-width: calc(100vw - 400px);

  // @include tablet{
  //   width: 60vw;
  //   height: 40vw;
  // }

  @include bg-desktop{
    width: 50vw;
    // height: 30vw;
  }

  img{
    border: 30px solid black;
    width: 100%;

  }

  h2{
    position: absolute;
    color: white;
    font-size: 6vw;
    text-transform: uppercase;
    // letter-spacing: 1rem;
    // margin-block-start: 1.5em;
    // margin-block-end: 0.0em;
    text-align: center;
    width: 100%;
    padding: 50px;
    top: 0;
    left: 0;

    &.top {
      position: absolute;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    &.bottom {
      position: absolute;
      bottom: 0px;
      left: 0px;
      top: auto;
      span {
        font-size: 7vw;
        display: flex;
        justify-content: space-between;
      }
    }
    

    @include bg-desktop{
      font-size: 4vw;
    }
  
    span{
      display: block;
    }
  }
}
</style>
