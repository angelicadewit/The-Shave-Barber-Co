<template>
    <li class="service">
        <div>
            <h3>{{ barberCoService.name }}</h3>
            <!-- <img :src="require(`@/assets/${valuedTeamMemberData.name}.png`)" alt=""> -->
            <p class="price-span">
                <span class="price">${{ barberCoService.price }}</span>
                <span class="book">Book</span>
            </p>
        </div>
        <div class="description-text">
            <p class="desc-text">
                {{ barberCoService.description }}
            </p>
        </div>
    </li>
</template> 

<script>
export default {
    name: 'service',
    props: {
        barberCoService: Object,
        active: false,
    },
    methods: {
    }
}
</script>

<style scoped lang="scss">

.service{
    font-size: 2.2rem;
    width: 50% auto;
    margin: 10%;
    @include desktop{
        margin: 5% 5% 0% 5%;
    }


    h3{
        color: #906337;
        text-transform: uppercase;
    }

    .price-span{
        color: #906337;
        background-image: url("../assets/beigespacer.png");
        background-repeat: no-repeat;
        background-size: contain;
        cursor: pointer;

        .book{
            color:$header-teal;
        }

        @include desktop {

        background-position-x: 50%;

            .price {
                display: inline;
            }
            .book {
                display: none;
            }
        }
        span {
            background-color: white;
            padding: 0 5px;

            @include desktop {
                padding: 0 10px;

            }
        }
        
    }

    @include desktop {
        &:hover {
            .price-span{
                .price {
                    display: none;
                }
                .book {
                    display: inline;
                }
            }
        }
    }

    .desc-text{
        font-size: 1.2rem;
    }
}
</style>

