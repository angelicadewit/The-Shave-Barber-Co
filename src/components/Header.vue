<template>

  <div class="header">
    <h2 :class="$route.meta.headerClass">{{ $route.meta.title }}</h2>
      <div :class="'spacer ' + $route.meta.headerClass"></div>
  </div>

</template>

<script>
export default {
  name: 'header-component',
  props: {
    msg: String
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header{
  height: auto;
  width: fit-content;
  align-self: center;
  
  @include desktop{
    margin-top: 4%;
  }

  @include bg-desktop{
    margin-top: -4%;
  }
}


.spacer{
  background: url("../assets/gold-spacer-element.png") no-repeat 50%;
  height: 50px;
  background-size: contain;
  width: 83%;
  margin: auto;
  display: block;


  @include tablet{
    height: 30px;
    width: 100%;
  }

  &.services{
    display: none;
  }

  &.barber{
    height: 20px;
  }
}

h2{
  margin-bottom: 0px;
  text-transform: uppercase;
  padding: 2px 20px;
}

.home{
  color: #A3CAC0;
  font-size: 30px;
}

.barber,
.services{
  color: black;
  font-size: 2.2rem;

    @include desktop{
      font-size: 3.5rem;
      letter-spacing: .5rem;
    }
  }
</style>
