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
            <p class="bio-text">
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

    h3{
        color: #906337;
        text-transform: uppercase;
    }

    .price-span{
        color: #906337;
        background: url("../assets/beigespacer.png") no-repeat;
        background-size: contain;

        @include desktop {
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

    // .book-span{
    //     color: $header-teal;
    // }
}
</style>

