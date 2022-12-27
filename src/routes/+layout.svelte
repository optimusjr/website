<script>
	import Header from './Header.svelte';
	import './styles.scss';
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
</div>

<style lang="scss">
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		margin: auto;
	}
</style>
