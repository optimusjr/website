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

<h1>
	<img src={logo_horizontal} alt="Logo da OPTIMUS Jr." />
</h1>

<ul>
	<li><a href="http://wa.me/5571999112217">Whatsapp</a></li>
	<li>&dot;</li>
	<li><a href="https://www.instagram.com/optimusjrautomacao/">Instagram</a></li>
	<li>&dot;</li>
	<li><a href="https://br.linkedin.com/company/optimus-jr-automacao">Facebook</a></li>
</ul>

<style>
	h1 {
		width: 100%;
	}

	h1 img {
		display: block;
		margin: auto;

		width: 80vw;
		max-width: 700px;
	}

	ul {
		display: flex;
		justify-content: center;
		padding: 0;
	}

	li {
		list-style: none;
		text-transform: uppercase;
		font-size: 2em;
		padding: 10px;

		color: var(--color-gray);
	}

	li a {
		color: var(--color-gray);

		transition: border-bottom-color 0.15s cubic-bezier(0.4, 0, 0.2, 1);
		border-bottom: 2px solid transparent;
	}

	li a:hover {
		color: var(--color-primary);
		border-bottom: 2px solid currentcolor;
	}
</style>
