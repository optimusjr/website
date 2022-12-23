<script>
	import logo_horizontal from '$lib/images/logo_horizontal.svg';
</script>

<svelte:head>
	<title>OPTIMUS Jr. Controle e Automação | Empresa de Automação em Salvador</title>
	<meta
		name="description"
		content="Realizando sonhos, automatizando vidas. futuro está em todos os lugares, permita que ele entre na sua casa com a melhor experiência, conforto, praticidade e economia!"
	/>
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<img src={logo_horizontal} alt="Logo da OPTIMUS Jr." />
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
