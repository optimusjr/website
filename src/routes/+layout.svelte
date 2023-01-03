<script lang="ts">
	import Header from '$lib/Header/index.svelte';
	import './styles.scss';
</script>

<div class="app">
	<Header />
	<main style="display:contents">
		<slot />
	</main>
</div>

<style lang="scss">
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
