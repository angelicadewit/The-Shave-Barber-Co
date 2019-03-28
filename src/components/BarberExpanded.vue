<template>
    <!-- <div class="left" -->
    <li class="barber">
        <!-- <div class="barber-img" :style="'background-image: url(' + require(`@/assets/${valuedTeamMemberData.name}.png`) + ');'"> -->
        <div class="image-wrapper" ref="barberLI">
            <h3>{{ valuedTeamMemberData.name }}</h3>
            <img :src="require(`@/assets/${valuedTeamMemberData.name}.png`)" alt="">
        </div>
        <div class="description-text">
            <p class="bio-text">
                {{ valuedTeamMemberData.bio }}
            </p>
            <div class="book-btn">
                <div class="pointer"></div><span>Book</span> {{ valuedTeamMemberData.name }}
            </div>
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
            max: 15,
        } )
    }
}
</script>

<style scoped lang="scss">
    .barber{
        width: 90%;
        margin: 5%;
        position: relative;
        display: block;
        z-index: 100;
        transform: translateZ(20px);

        @include desktop{
            // display: none;
            opacity: 0;
            visibility: hidden;
            top: 50%;
            left: 50%;
            position: absolute;
            max-width: 520px;
            margin-right: -50%;
            transform: translate(-70%,-50%);
            transition: 0.5s;

            &.active {
                // display: block;
                opacity: 1;
                visibility: visible;
            } 
        }
        


        h3{
            font-size: 2.2rem;
            @include lora-bold;
            text-transform: uppercase;
            position: absolute;
            top: 50%;

            @include desktop{
                font-size: 4rem;
                transform: translateZ(30px);
            }
        } 

        &.gold-border{
            color: $teal;

            .image-wrapper::before{
                background-image: url("../assets/gold-border.png");
                transform: scale(0.93) translateZ(40px);
            }
        }

        &.teal-border{
            color: $gold;

            .image-wrapper::before{
                background-image: url("../assets/turquoise-border.png");
                transform: scale(0.93) translateZ(40px);
            }
        }

        .image-wrapper{
            position: relative;
            z-index: 15;
            transform-style: preserve-3d;
            transform: perspective(1000px);

            img{
                width: 95%;
                margin: 5%;

            }
            
            &::before{
                content: "";
                width: 100%;
                height: 100%;
                background-repeat: no-repeat;
                background-size: contain;
                position: absolute;
                display: inline-block;
                left: 0;
            }
        }
    }

    .description-text{
        background: black;
        color: white;
        text-transform: capitalize;
        position: relative;
        margin-top: -20%;
        padding: 25% 5% 5%;
        transform: translateX(6%);
        z-index: 3;

        @include desktop{
            transform: translateX(15%);
        }
        

        .bio-text{
            font-size: 1rem;
            text-align: left;
        }

        .book-btn{
            font-size: 2rem;
            padding: 5%;
            display: flex;
            justify-content: flex-end;
            text-transform: uppercase;
            cursor: pointer;

            .pointer{
                width: 60px;
                background: url("../assets/pointer.png") no-repeat 50%;
                background-size: contain;
                height: 30px;
                animation: ani-poke 0.5s infinite;
                margin-right: 10px;
            }

            span{
                color: #84858b;
                margin-right: 10px;
                align-self: auto;
            }
        }
    }

    @keyframes ani-poke{
        0% {
            transform: translateX(0%);
        }
        20% {
            transform: translateX(5%);
        }
        30% {
            transform: translateX(0%);
        }
        80% {
            transform: translateX(-5%);
        }
    }
</style>

