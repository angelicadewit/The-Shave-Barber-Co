<template>
  <div>
    <ul>
      <barber v-for="staffMember in staff" v-bind:key="staffMember.id" :valuedTeamMemberData="staffMember"></barber>
    </ul>
  </div>
</template>

<script>
import barber from '@/components/Barber.vue'

export default {
	name: 'team',
	components: {
		barber
	},
  data: function() {
    return {
      staff: [
        {
          id: 0,
          name: "david",
          image: "@/src/david.png",
        },
        {
          id: 1,
          name: "brooks",
          image: "@/src/brooks.png",
        },
        {
          id: 2,
          name: "chris",
          image: "@/src/barbers/chris.png",
        },
        {
          id: 3,
          name: "carl",
          image: "@/src/barbers/carl.png",
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
ul {
  display: flex;
  flex-wrap: wrap;
}
</style>
