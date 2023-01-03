<script lang="ts">
	import logo from '$lib/images/logo.svg';
	import logo_horizontal from '$lib/images/logo_horizontal.svg';
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
		<h1>Leve o futuro para o seu lar com as nossas soluções de automação residencial.</h1>
		<p>
			Controle tudo em sua casa, desde a iluminação até a temperatura, de forma fácil e intuitiva
			com o nosso aplicativo.
		</p>
	</div>
	<img src={logo} alt="Logo da OPTIMUS Jr." height="300" />
</article>

<style lang="scss">
	article {
		display: grid;
		grid-template-columns: 1fr 2fr;

		width: 100%;
		height: 100vh;

		align-items: center;
		justify-items: center;
	}
</style>
