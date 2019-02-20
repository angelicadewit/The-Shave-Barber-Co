<template>
	<div id="app">
		<div class="top-element">
			<router-link to="/" class="logo"><img alt="The Shave Barber Co" :src="require('@/assets/logo.png')"></router-link>
			<Header msg="It Pays To Look Good."/>
		</div>
		<nav>
			<div class="flushed-left">
				<router-link to="/services">Services</router-link>
			</div>
			<div class="flushed-right">
				<router-link to="/team" class="team-link">Team</router-link>
			</div>
		</nav>
		<router-view/>
	</div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
	name: 'home',
	components: {
		Header
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
	color: #2c3e50;
	width: 100%;
	height: 100%;
}

.top-element{
	display: flex;
	// justify-content: center;

	.header{
		align-self: center;
		margin: 9% 15%;
	}
}

.logo{
	align-self: flex-start;
	margin: 5%;
	
	img{
		width: 200px;
	}
}

nav {
	display: flex;
	justify-content: space-between;
	height: 100%;
	a {
		font-weight: 300;
		font-size: 3rem;
		text-transform: uppercase;
		color: #A3CAC0;
		text-decoration: none;
		
		&.services-link{
			align-self: flex-start;
			left: 0;
			padding: 0px 25px;
			transform: rotate(-90deg);
		}

		&.router-link-exact-active {
			color: #42b983;
		}
	}

	.flushed-left,
	.flushed-right{
		transform-origin: 0 100%;
		position: absolute;
		height: 25px;
		width: 100%;
	}
	.flushed-left{
		transform: rotate(-90deg);
		left: 25px;
		bottom: 35%;
	}
	.flushed-right{
		transform: rotate(90deg);
		left: 99%;
		left: 98%;
    	bottom: 53%
	}
}

</style>
