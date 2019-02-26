<template>
	<div>
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
			<router-view/>
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
@import url('https://fonts.googleapis.com/css?family=Lora:700');
@import url('https://use.typekit.net/cco7rbw.css');

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
		font-size: 3rem;
		text-transform: uppercase;
		text-decoration: none;
		color: #A3CAC0;

		&.router-link-exact-active {
			color: #42b983;
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
		width: 200px;
	}

	.logo{
		@include tablet{
			align-self: flex-start;
		}
	}
}

</style>
