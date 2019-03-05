<template>
  <div class="team">
    <ul class="thumbnails"> <!-- FOR TABLET AND UP-->
      <div v-for="staffMember in staff" :key="staffMember.id" @click="currentBarber = staffMember">
        <barber :key="staffMember.id" :class="[staffMember.class]" :valuedTeamMemberData="staffMember"></barber>
      </div>
    </ul>
    <div class="overlay" v-if="currentBarber" @click="currentBarber = null"></div>
    <ul class="full-desc"> <!-- EXPANDED WITH DISPLAY AND STUFF SHOWN -->
      <barber-expanded v-for="staffMember in staff" :key="staffMember.id" :valuedTeamMemberData="staffMember" :class="[staffMember.class, (currentBarber == staffMember)?'active':'']"></barber-expanded>
    </ul>
  </div>
</template>

<script>
import barber from '@/components/Barber.vue'
import barberExpanded from '@/components/BarberExpanded.vue'

export default {
	name: 'team',
	components: {
		barber,
    barberExpanded
	},
  data: function() {
    return {
      currentBarber: null,
      staff: [
        {
          id: 0,
          name: "david",
          image: "@/src/david.png",
          class: "gold-border",
          bio: "David specializes in fades, tapering and scissor cuts. He is eager and is constantly practicing innovative men's grooming techniques. In his off time you can find Brooks outdoors, submerged in non-fiction, working out, travel",
        },
        {
          id: 1,
          name: "brooks",
          image: "@/src/brooks.png",
          class: "teal-border",
          bio: "A trained Barber with a back ground in Fashion and Art, Brooks is a firm believer in the transformative power of a good haircut. His attention to detail and ability to connect with his clients while delivering their desired cuts make it seem like he is reading their mind. A South Florida transplant, Brooks spends his free time exploring his new home Atlanta, playing video games, and collecting as many action figures as can fit in his loft apartment.",
        },
        {
          id: 2,
          name: "chris",
          image: "@/src/barbers/chris.png",
          class: "teal-border",
          bio: "As Chris grew so did his passion, eventually attending Mid South Styling Acedemy, leading to a career a 5 year career with Regis where he honed many of his skills. In his free time he also enjoys doing make up, hanging with his friends and family and trying new local restaurants. Chris is very excited to continue to career with The Shave becuase his favorite styles to cut are fades and large beards and we have plenty to go around."
        },
        {
          id: 3,
          name: "carl",
          image: "@/src/barbers/carl.png",
          class: "gold-border",
          bio: "All the way from scenic Chattanooga, Tennessee, Carl trained at Alternative Visions Hair and Nails Academy.  In 1999 after receiving a Master Cosmetology license he packed up his things and headed to Atlanta, Georgia to expand his experience and hone his skills.  Carl's love for fashion and travel has carved him into a well-rounded chameleon with an edgy dash of humor.  He's a great friend to have and brings 200 watts of light to the darkest rooms. In his down time Carl enjoys hanging with friends, shopping, playing cards, concerts and writing music."
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.team{
  margin: auto;
  width: 70vw;
  max-width: 800px;
}
ul {
  margin: 10% auto;
  margin-bottom: 0%;

  @include desktop{   
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }


  &.thumbnails{
    // display: none;
    // hide these for mobile
  }
  // &.full-desc{
  //   display: none;
  // }
}

.overlay {
  
}

</style>
