<template>
  <div class="homepage">
    <Header msg="hello"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'home',
  components: {
    Header
  }
}
</script>

<style scoped lang="scss">
.home{
  display: flex;
  justify-content: space-evenly;

}
</style>
