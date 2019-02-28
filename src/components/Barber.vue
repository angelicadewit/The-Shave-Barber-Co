<template>
    <!-- <div class="left" -->
    <li class="barber" :style="'background-image: url(' + require(`@/assets/${valuedTeamMemberData.name}.png`) + ');'">
        <h3>{{ valuedTeamMemberData.name }}</h3>
    </li>
</template> 

<script>
export default {
    name: 'Barber',
    props: {
        valuedTeamMemberData: Object,   

    }
}
</script>

<style scoped lang="scss">
    .barber{
        width: 45%;
        height: 0;
        padding-bottom: 45%;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: 50% 50%;

        img{
            object-fit: cover;
        }
        

        h3{
            color: gray;
        }
    }
</style>

