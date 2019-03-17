<template>
    <div class="book-wrapper">
        <div>
            <h3>Same Day Service</h3>
            <div class="spacer"></div>
        </div>
        <div class="description-text">
            <p>We operate like a <span class="caps">traditional</span> barbershop, we use an old school wait list with pen and paper. Or you can make an appointment here.</p>
        </div>
        <div class="book-btn">
            <div class="pointer"></div>
            <span class="book caps">Book</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'book-component',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.book-wrapper{
    width: 80%;
    margin: auto;

    @include desktop{
        width: 20%;

    }
    
    @include bg-desktop{
        position: absolute;
        top: 70%;
        left: 75%;
        padding-bottom: 100px;
    }

    .caps{
        text-transform: uppercase;
    }

    h3{
        color: #906337;
        font-size: 1.5rem;
        @include lora-bold;
        text-transform: uppercase;
        padding: 0px 20px;
    }

    .book{
        color: #906337;
        @include lora-bold;
        align-self: center;
        font-size: 1.7rem;
    }

    .description-text{
        width: 82%;
        max-width: 400px;
        margin: 0 auto;
    }

    .spacer{
        background: url("../assets/rose-spacer.png") no-repeat 50%;
        height: 50px;
        background-size: contain;
        width: 83%;
        margin: auto;
        display: block;


        @include tablet{
            height: 30px;
            width: 100%;
        }
    }

    .book-btn{
        display: flex;
        justify-content: center;
        cursor: pointer;
        margin-top: 2%;
    }

    .pointer{
        width: 50px;
        background: url("../assets/pointer.png") no-repeat 50%;
        background-size: contain;
        height: 20px;
        animation: ani-poke 0.5s infinite;
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
}
</style>
