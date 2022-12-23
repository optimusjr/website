<script>
	import logo from '$lib/images/icon.svg';
</script>

<header>
	<div class="corner">
		<a href="/">
			<img src={logo} alt="Ícone da OPTIMUS Jr." />
		</a>
	</div>

	<ul>
		<li><a href="http://wa.me/5571999112217">Whatsapp</a></li>
		<li><a href="https://www.instagram.com/optimusjrautomacao/">Instagram</a></li>
		<li><a href="https://br.linkedin.com/company/optimus-jr-automacao">Facebook</a></li>
	</ul>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;

		background-color: var(--color-gray);
		padding: 8px 32px 8px 32px;
	}

	div {
		width: 3em;
		height: 3em;
	}

	div a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	div img {
		width: 45px;
		height: 45px;
		object-fit: contain;
	}

	ul {
		display: flex;
	}

	li {
		list-style: none;
	}

	li a {
		text-transform: uppercase;
		font-size: 1.2em;
		font-weight: 800;
		padding: 10px;

		color: white;
	}

	li a:hover {
		color: var(--color-primary);
	}
</style>
