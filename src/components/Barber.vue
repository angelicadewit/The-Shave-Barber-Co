<template>
    <!-- <div class="left" -->
    <li ref="barberLI" class="barber">
        <!-- <div class="barber-img" :style="'background-image: url(' + require(`@/assets/${valuedTeamMemberData.name}.png`) + ');'"> -->
        <div class="barber-extended">
            <div class="border"></div>
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
    },
    mounted() {
        console.log('a wild barber appears', this.$refs.barberLI)
        VanillaTilt.init( this.$refs.barberLI, {
            max: 10,
        } )
    }
}
</script>

<style scoped lang="scss">
    
    .barber{
        width: 90%;
        margin: 5%;
        position: relative;
        cursor: pointer;
        transform-style: preserve-3d;
        transform: perspective(1000px);

        img{
            width: 90%;
            margin: 5%;
            transform: translateZ(20px);
        }

        h3{
            font-size: 5rem;
            @include lora-bold;
            text-transform: uppercase;
            position: absolute;
            top: 47%;

            @include desktop{
                font-size: 4rem;
                transform: translateZ(80px);
            }
        }

        & .border{
            // content: "";
            width: 90%;
            height: 100%;
            background-repeat: no-repeat;
            background-size: contain;
            position: absolute;
            display: inline-block;
            left: 0;
            transform: scale(0.93) translateZ(50px);
        }

        &.gold-border{
            color: $teal;

            & .border{
                background-image: url("../assets/gold-border.png");
            }
        }

        &.teal-border{
            color: $gold;

            & .border{
                background-image: url("../assets/turquoise-border.png");
            }
        }
    }
</style>

