<script lang="ts">
	import bedroomOff from '$lib/images/bedroom-off.png';
	import bedroomOn from '$lib/images/bedroom-on.png';
</script>

<svelte:head>
	<title>OPTIMUS Jr. Controle e Automação | Empresa de Automação em Salvador</title>
	<meta
		name="description"
		content="Empresa júnior de automação residencial, oferecemos soluções inovadoras e personalizadas para tornar sua casa mais inteligente."
	/>
</svelte:head>

<article>
	<div class="text">
		<h1>Leve o futuro para o seu lar.</h1>
		<p>Controle tudo em sua casa com as nossas soluções de automação residencial.</p>
	</div>

	<div class="animation">
		<svg
			width="612"
			height="508"
			version="1.1"
			viewBox="0 0 612 508"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
		>
			<image class="bottom-image" xlink:href={bedroomOff} />
			<image class="top-image" xlink:href={bedroomOn} />
		</svg>
	</div>
</article>

<style lang="scss">
	article {
		display: flex;
		flex-direction: column;
		align-items: center;

		min-height: 100vh;

		padding: 88px 64px;
	}

	.text {
		padding: 50px;
		width: 60%;
		text-align: center;
	}

	h1 {
		color: var(--color-primary);
		font-size: 5em;
		margin: 0;

		text-transform: uppercase;
	}

	p {
		color: var(--color-gray);
		font-size: 2em;
		margin: 0;
	}

	.animation {
		svg {
			width: auto;
			height: auto;
			overflow: visible;
		}

		.bottom-image {
			filter: drop-shadow(0 14px 28px rgba(0, 0, 0, 0.25));
		}

		.top-image {
			animation: fade-loop 5s ease-in-out infinite alternate;
		}
	}

	@keyframes fade-loop {
		0% {
			opacity: 0;
		}

		50% {
			opacity: 0;
		}

		56% {
			opacity: 1;
		}

		100% {
			opacity: 1;
		}
	}
</style>
