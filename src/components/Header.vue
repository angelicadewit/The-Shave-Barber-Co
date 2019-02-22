<template>

  <div class="header">
    <h2>{{ msg }}</h2>
      <div class="spacer"></div>
  </div>

</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header{
  height: auto;
  width: fit-content;
}
.spacer{
  background: url("../assets/gold-spacer-element.png") no-repeat 50%;
  height: 50px;
  background-size: cover;
  width: 100%;
}

h2{
  margin-bottom: 0px;
  text-transform: uppercase;
  color: #A3CAC0;
  letter-spacing: 2px;
  padding: 2px 20px;
  font-size: 30px;
}

</style>
