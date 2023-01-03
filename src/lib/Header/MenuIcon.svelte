<script lang="ts">
	export let open = false;
</script>

<svg width="24" height="24" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path class={open ? 'open' : 'close'} d="m3 16h18v2h-18z" />
	<path d="m3 11h18v2h-18v-2" />
	<path class={open ? 'open' : 'close'} d="m3 6h18v2h-18v-2" />
</svg>

<style lang="scss">
	path {
		transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
	}

	.close {
		transform: translateX(0);
	}

	.open {
		transform: translateX(24px);
	}
</style>
