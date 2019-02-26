<template>
	<div>
		<div id="app">
			<nav>
				<div class="header-container">
					<router-link to="/" class="logo"><img src="../src/assets/logo.png" alt=""></router-link>
					<header-component msg="It Pays To Look Good."></header-component>
				</div>
				<router-link to="/services" class="services-link">Services</router-link>
				<router-link to="/team" class="team-link">Team</router-link>
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
		font-size: 26px;
		text-transform: uppercase;
		color: #A3CAC0;

		&.router-link-exact-active {
			color: #42b983;
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
