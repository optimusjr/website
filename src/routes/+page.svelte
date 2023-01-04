<script lang="ts">
	import bedroomOff from '$lib/images/bedroom-off.png';
	import bedroomOn from '$lib/images/bedroom-on.png';
</script>

<svelte:head>
	<title>OPTIMUS Jr. Controle e Automação | Empresa de Automação em Salvador</title>
	<meta
		name="description"
		content="Realizando sonhos, automatizando vidas. futuro está em todos os lugares, permita que ele entre na sua casa com a melhor experiência, conforto, praticidade e economia!"
	/>
</svelte:head>

<article>
	<div>
		<h1>Leve o futuro para o seu lar.</h1>
		<p>
			Controle tudo em sua casa, desde a iluminação até a temperatura, com as nossas soluções de
			automação residencial
		</p>
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
		display: grid;
		grid-template-columns: auto minmax(auto, 700px);
		align-content: center;
		align-items: center;
		justify-items: center;

		min-height: 100vh;

		padding: 88px 64px;
		box-sizing: border-box;
	}

	h1 {
		color: var(--color-primary);
		font-size: 6em;
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
			max-width: 700px;
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
