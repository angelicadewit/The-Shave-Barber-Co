<template>
	<div>
		<div class="corner corner-top corner-right"></div>
		<div class="corner corner-top corner-left"></div>
		<div class="corner corner-bottom corner-right"></div>
		<div class="corner corner-bottom corner-left"></div>


		<div id="app">
			<div class="header-container">
				<router-link to="/" class="logo"><img src="../src/assets/logo.png" alt=""></router-link>
				<header-component msg="It Pays To Look Good."></header-component>
				<!-- <header-component :bind="msg"></header-component> -->
			</div>
			<nav>
				<div class="services-link">
					<router-link to="/services">Services</router-link>
				</div>
				<div class="team-link">
					<router-link to="/team">Team</router-link>
				</div>
			</nav>
			<transition name="slide-left">
				<router-view/>
			</transition>
		</div>
	</div>
</template>


<script>
import HeaderComponent from '@/components/Header.vue'

export default {
	name: 'home',
	components: {
		HeaderComponent
	}
}
</script>



<style lang="scss">

@import "@/styles/_reset.scss";

#app {
	font-family: "stymie", serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;	
}

nav {
	a {
		font-weight: 300;
		font-size: 2.5em;
		text-transform: uppercase;
		text-decoration: none;
		color: #A3CAC0;
		font-weight: 500;

		&.router-link-exact-active {
			color: $gold;
		}
	}

	.services-link,
	.team-link{
		@include tablet{
			position: fixed;
			top: 0;
			bottom: 0;
			height: 1.5em;
			margin: auto;
		}
	}
		
	.services-link{
		@include tablet{
			left: 0;
			transform-origin: 0 50%;
			transform: rotate(-90deg) translate(-50%, 50%);
		}
	}

	.team-link{
		@include tablet{
			right: 0;
			transform-origin: 100% 50%;
			transform: rotate(90deg) translate(50%, 50%);
		}
	}
}

.header-container{
	display: flex;
	flex-direction: column;
	justify-content: center;

	img{
		width: 40%;

		@include tablet{
			padding-bottom: 3%;
		}

		@include desktop{
			width: 60%;
		}
	}

	.logo{
		position: relative;
		z-index: 5; 

		@include desktop{
			align-self: flex-start;
			transform: translate(25%,30%);
		}
	}
}

h2{
	@include lora-bold;
}

.slide-left-enter-active,
.slide-left-leave-active{
	transition-duration: 0.5s;
	transition-property: opacity, transform;
	overflow: hidden;
	opacity: 0;
}

.slide-left-enter,
.slide-left-enter-active{
	transform: translate(0, 2em);
	transition-duration: 0.5s;
}

.slide-left-leave-active {
	transform: translate(0, -2em);
}

</style>
