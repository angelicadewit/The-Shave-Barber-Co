<template>
    <!-- <div class="left" -->
    <li class="barber">
        <!-- <div class="barber-img" :style="'background-image: url(' + require(`@/assets/${valuedTeamMemberData.name}.png`) + ');'"> -->
        <div class="image-wrapper">
            <h3>{{ valuedTeamMemberData.name }}</h3>
            <img :src="require(`@/assets/${valuedTeamMemberData.name}.png`)" alt="">
        </div>
        <div class="description-text">
            <p class="bio-text">
                {{ valuedTeamMemberData.bio }}
            </p>
            <p class="book-text">
                Book {{ valuedTeamMemberData.name }}
            </p>
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
        margin: 5%;
        position: relative;
        display: none;
        // always show for mobile

        &.active {
            display: block;
        }
        

        // @include desktop{
        //     flex: 1 0 40%;
        //     width: 10vw;
        //     padding-bottom: 10vw;
        // }

        h3{
            font-size: 5rem;
            @include lora-bold;
            text-transform: uppercase;
            position: absolute;
            top: 45%;
        } 

        &.gold-border{
            color: $teal;

            .image-wrapper::before{
                background-image: url("../assets/gold-border.png");
            }
        }

        &.teal-border{
            color: $gold;

            .image-wrapper::before{
                background-image: url("../assets/turquoise-border.png");
            }
        }

        .image-wrapper{
            position: relative;
            z-index: 5;

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
        transform: translateX(15%);

        .bio-text{
            font-size: 1rem;
        }

        .book-text{
            font-size: 1.5rem;
            padding: 5%;
        }
    }
</style>

