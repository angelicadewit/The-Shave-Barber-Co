<template>
    <!-- <div class="left" -->
    <li class="barber">
        <!-- <div class="barber-img" :style="'background-image: url(' + require(`@/assets/${valuedTeamMemberData.name}.png`) + ');'"> -->
        <div class="barber-extended">
            <h3>{{ valuedTeamMemberData.name }}</h3>
            <img :src="require(`@/assets/${valuedTeamMemberData.name}.png`)" alt="">
        </div>
    </li>
</template> 

<script>
export default {
    name: 'Barber-expanded',
    props: {
        valuedTeamMemberData: Object,
    }
}
</script>

<style scoped lang="scss">
    
    .barber{
        width: 90%;
        margin: 1%;
        position: relative;
        cursor: pointer;

        img{
            width: 90%;
            margin: 5%;
        }

        h3{
            font-size: 5rem;
            @include lora-bold;
            text-transform: uppercase;
            position: absolute;
            top: 47%;

            @include desktop{
                font-size: 2.2rem;
            }
        }

        &::before{
            content: "";
            width: 90%;
            height: 100%;
            background-repeat: no-repeat;
            background-size: contain;
            position: absolute;
            display: inline-block;
            left: 0;
        }

        &.gold-border{
            color: $teal;

            &::before{
                background-image: url("../assets/gold-border.png");
            }
        }

        &.teal-border{
            color: $gold;

            &::before{
                background-image: url("../assets/turquoise-border.png");
            }
        }
    }
</style>

