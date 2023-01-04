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
	<div class="text">
		<h1>Leve o futuro para o seu lar com as nossas soluções de automação residencial.</h1>
		<p>
			Controle tudo em sua casa, desde a iluminação até a temperatura, de forma fácil e intuitiva
			com o nosso aplicativo.
		</p>
	</div>

	<div class="animation">
		<svg
			width="794"
			height="722"
			version="1.1"
			viewBox="0 0 794 722"
			xmlns="http://www.w3.org/2000/svg"
		>
			<image width="794" height="722" xlink:href={bedroomOff} />
			<image class="top-image" width="794" height="722" xlink:href={bedroomOn} />
		</svg>
	</div>
</article>

<style lang="scss">
	article {
		display: grid;
		grid-template-columns: 1fr 2fr;
		min-height: 100vh;
	}

	.text {
		margin: auto;
	}

	.animation {
		margin-top: auto;
		width: 100%;
		line-height: 0;

		image {
			width: 100%;
			max-width: 700px;
		}

		.top-image {
			animation: fade-loop 10s ease-in-out infinite alternate;
		}
	}

	@keyframes fade-loop {
		0% {
			opacity: 0;
		}

		10% {
			opacity: 0;
		}

		20% {
			opacity: 0;
		}

		30% {
			opacity: 0;
		}

		33% {
			opacity: 1;
		}

		40% {
			opacity: 1;
		}

		50% {
			opacity: 1;
		}

		60% {
			opacity: 1;
		}

		70% {
			opacity: 1;
		}

		73% {
			opacity: 0;
		}

		80% {
			opacity: 0;
		}

		90% {
			opacity: 0;
		}

		100% {
			opacity: 0;
		}
	}
</style>
