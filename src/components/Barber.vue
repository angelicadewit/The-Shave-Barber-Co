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
        width: 30vw;
        height: 0;
        padding-bottom: 20vw;
        margin-bottom: 1%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 50%;
        

        h3{
            color: gray;
        }
    }
</style>

