<template>
  <div class="homepage">
    <div class="hero">
    <div class="a-letter"></div>
      <h2 class="top">
        <span>T</span><span>r</span><span>a</span><span>d</span><span>i</span><span>t</span><span>i</span><span>o</span><span>n</span><span>a</span><span>l</span>
      </h2>
      <div class="flourish"></div>
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
  opacity: 0.9;
  position: absolute;
  width: 25vw;
  height: 25vw;
  top: -20%;
  left: -20%;
  display: none;

  
  @include bg-desktop{
    display: block;
  }
}

.hero{
  margin: 1% auto;
  background: url(../assets/demask-background.png) no-repeat;
  background-size: contain;
  padding: 20px;
  position: relative;
  width: 75vw;
  max-width: 800px;

  @include tablet{
    padding: 50px;

  }

  @include bg-desktop{
    margin-top: 2%;
    width: 50vw;
  }

  img{
    border: 10px solid black;

    @include desktop{
      border: 30px solid black;
    }
    width: 100%;
  }

  .flourish{
  position: absolute;
  background: url(../assets/florish.png) no-repeat;
  background-size: contain;
  width: 50px;
  height: 0;
  padding-bottom: 50%;
  display: none;

  @include tablet{
    display: block;
  }

  @include desktop{
    top: 45%;
    left: 90.5%;
  }
}

  h2{
    position: absolute;
    color: white;
    font-size: 6vw;
    text-transform: uppercase;
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
