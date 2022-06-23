<template>
	<div id="#app">
		<h1>Rotas com VueRouter</h1>
		<Menu />
	</div>
</template>

<script>
import './assets/sass/_app.scss';
import Menu from './components/templates/Menu.vue';
export default {
	name: 'App',
	components: { Menu }
}
</script>
