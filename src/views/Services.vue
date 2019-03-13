<template>
    <div class="services">
        <ul class="services">
            <service class="service-wrapper" v-for="service in services" :key="service.id" :barberCoService="service"></service>
        </ul>
    </div>
</template>

<script>
import service from '@/components/Service.vue'

export default {
    name: 'services',
    components: {
        service
    },
    data: function() {
    return {
        services: [
                {
                    id: 0,
                    name: "Men's Haircut",
                    price: "35",
                    description: "A standard cut for a shorter, traditional men's style employing the use of shears or clippers as the stylist sees fit, then cleaning the neck line with clippers.",
                },
                {
                    id: 1,
                    name: "Long Haircut",
                    price: "40",
                    description: "A cut for longer hair, often layered or texturized and may require specialized shear work.",
                },
                {
                    id: 2,
                    name: "Buzz Cut",
                    price: "20",
                    description: "A clipper cut across the entire head using only one guard. No fading.",
                },
                {
                    id: 3,
                    name: "Specialty Cut",
                    price: "30",
                    description: "You will experience the artistic talents of our barbers and stylists when they use their skills to meet your needs, whether it is a flat top, skin fade or the like.",
                },
                {
                    id: 4,
                    name: "Beard Trim",
                    price: "15",
                    description: "Using clippers or shears to trim or shape facial hair, followed by a razor line up of the jaw, neck and cheeks. Finished with a relaxing hot towel.",
                },
                {
                    id: 5,
                    name: "Hot Shave",
                    price: "20",
                    description: "Using clippers or shears to trim or shape facial hair, followed by a razor line up of the jaw, neck and cheeks. Finished with a relaxing hot towel.",
                },
            ],
        }
    }

}
</script>

<style scoped lang="scss">
.services{
    margin: auto;
    width: 70vw;
    max-width: 1000px;
    background: white url("../assets/barberchair.png") no-repeat;
    background-attachment: fixed;
    background-size: 60%;
    background-position-x: 55%;
    background-position-y: 20%;

    @include tablet{
        background-position-y: 0%;
    }

    @include desktop{
        background-size: 25%;
        background-position-y: 50%;
    }
}


ul {
    margin: 10% auto;
    margin-bottom: 0%;

    @include desktop{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .service-wrapper{
        @include desktop{
            width: 30%;
        }
    }
}

</style>
