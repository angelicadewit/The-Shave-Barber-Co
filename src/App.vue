<template>
	<div>
		<div class="border corner corner-top-left"></div>
		<div class="border corner  corner-top-right"></div>
		<div class="border corner  corner-bottom-right"></div>
		<div class="border corner corner-bottom-left"></div>
		<div class="border side side-left"></div>
		<div class="border side side-right"></div>
		<div class="border top-bottom top-bottom-top"></div>
		<div class="border top-bottom top-bottom-bottom"></div>

		<div id="app">
			<div class="header-container">
				<router-link to="/" class="logo"><img src="../src/assets/logo.png" alt=""></router-link>
				<header-component msg="It Pays To Look Good."></header-component>
			</div>
			<nav>
				<div class="services-link">
					<router-link to="/services">Services</router-link>
				</div>
				<div class="team-link">
					<router-link to="/team">Team</router-link>
				</div>
			</nav>
			<transition name="fades">
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
	padding-bottom: 75px;
}

nav {
	a {
		font-weight: 300;
		font-size: 2.5em;
		text-transform: uppercase;
		text-decoration: none;
		color: #A3CAC0;
		font-weight: 500;
		background-color: white;
		padding: 0px 20px;

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
			padding-top: 20px;
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
	position: relative;
	padding-top: 20%;

	@include desktop{
		padding-top: 3%;
	}

	img{
		width: 40%;

		@include tablet{
			padding-bottom: 3%;
		}

		@include desktop{
			width: 70%;
		}
	}

	.logo{
		position: relative;
		z-index: 5; 

		@include desktop{
			align-self: flex-start;
			transform: translate(55%,30%);
		}
	}
}

h2{
	@include lora-bold;
}
.fades-enter {
	opacity: 0;
	transform: translateY(2em);
	overflow: hidden;

}
.fades-enter-active {
	transition-property: opacity, transform;
	transition-duration: 0.5s;
	transition-delay: 0.5s;
	overflow: hidden;
}
.fades-enter-to {
	opacity: 1;
	transform: translateY(0);
	overflow: hidden;
}

.fades-leave {
	opacity: 1;
	transform: translateY(0);
	overflow: hidden;

}
.fades-leave-active {
	transition-property: opacity, transform;
	transition-duration: 0.5s;
	overflow: hidden;
}
.fades-leave-to {
	opacity: 0;
	transform: translateY(-2em);
}

.corner {
	position: fixed;
	width: 100px;
	height: 100px;
	background-size: cover;
	z-index: 1000;	

	&.corner-top-right {
		top: 15px;
		right: 30px;
		background-image: url("../src/assets/top-right.png");
		z-index: 8;
	}
	&.corner-top-left {
		top: 15px;
		left: 30px;
		background-image: url("../src/assets/top-left.png");
		z-index: 8;

	}
	&.corner-bottom-right {
		bottom: 15px;
		left: 29px;
		background-image: url("../src/assets/bottom-left.png");
		z-index: 8;
	}
	&.corner-bottom-left {
		bottom: 15px;
		right: 29px;
		background-image: url("../src/assets/bottom-right.png");
		z-index: 8;
	}
}

.side {
	position: fixed;
	width: $thickness;
	// background-color: pink;
	height: calc(100vh - #{$thickness} - #{$thickness});
	top: $thickness;

	&.side-left {
		left: 0;
		border-right: 1px solid;
		border-image: linear-gradient(#9f7656, #694d26) 0 100%;
		
	}
	&.side-right {
		right: 0;
		border-left: 1px solid;
		border-image: linear-gradient(#694d26, #9f7656) 0 100%;
	}
}


.top-bottom {
	position: fixed;
	height: $height;
	background-color: white;
	width: calc(100vw - #{$thickness} - #{$thickness});
	left: $thickness;

	&.top-bottom-top {
		top: 0;
		border-bottom: 1px solid;
		border-image: linear-gradient(to right, #9f7656, #694d26) 100% 0;
		z-index: 7;
	}
	&.top-bottom-bottom {
		bottom: 0;
		border-top: 1px solid;
		border-image: linear-gradient(to right, #694d26, #9f7656) 100% 0;
		z-index: 7;
	}
}



</style>
