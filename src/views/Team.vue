<template>
  <div class="team">
    <ul>
      <barber v-for="staffMember in staff" :key="staffMember.id" :class="staffMember.class" :valuedTeamMemberData="staffMember"></barber>
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
          class: "gold-border"
        },
        {
          id: 1,
          name: "brooks",
          image: "@/src/brooks.png",
          class: "teal-border"
        },
        {
          id: 2,
          name: "chris",
          image: "@/src/barbers/chris.png",
          class: "teal-border"
        },
        {
          id: 3,
          name: "carl",
          image: "@/src/barbers/carl.png",
          class: "gold-border",
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.team{
  width: 80%;
  margin: auto;
}
ul {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 10% auto;
  margin-bottom: 0%;
}
</style>
