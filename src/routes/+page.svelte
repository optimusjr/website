<script>
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

<h1>
	<img src={logo} alt="Logo da OPTIMUS Jr." class="hide-desktop" />
	<img src={logo_horizontal} alt="Logo da OPTIMUS Jr." class="hide-mobile" />
</h1>

<ul>
	<li><a href="http://wa.me/5571999112217">Whatsapp</a></li>
	<li>&bullet;</li>
	<li><a href="https://www.instagram.com/optimusjrautomacao/">Instagram</a></li>
	<li>&bullet;</li>
	<li><a href="https://br.linkedin.com/company/optimus-jr-automacao">Facebook</a></li>
</ul>

<style lang="scss">
	h1 {
		width: 100%;

		img {
			display: block;
			margin: auto;

			width: 80vw;
			max-width: 700px;

			@media (max-width: 600px) {
				max-width: 400px;
			}
		}
	}

	ul {
		display: flex;
		justify-content: center;
		padding: 0;
		margin-top: 32px;

		@media (max-width: 600px) {
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-top: 32px;
		}
	}

	li {
		list-style: none;
		text-transform: uppercase;
		font-size: 2em;
		padding: 8px;
		color: var(--color-gray);

		a {
			color: var(--color-gray);

			transition: border-bottom-color 0.15s cubic-bezier(0.4, 0, 0.2, 1);
			border-bottom: 2px solid transparent;

			&:hover {
				color: var(--color-primary);
				border-bottom: 2px solid currentcolor;
			}
		}
	}
</style>
