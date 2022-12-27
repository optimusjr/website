<script>
	import icon from '$lib/images/icon_white.svg';
	import wordmark from '$lib/images/wordmark.svg';
	import whatsapp from '$lib/images/icons/whatsapp.svg';
	import instagram from '$lib/images/icons/instagram.svg';
	import facebook from '$lib/images/icons/facebook.svg';
</script>

<header>
	<div class="left">
		<a href="/">
			<img src={icon} alt="Ícone da OPTIMUS Jr." height="32" />
			<img src={wordmark} alt="OPTIMUS Jr. escrito em letras brancas" height="16" />
		</a>
	</div>

	<ul class="center">
		<li><a href="#about">Sobre Nós</a></li>
		<li><a href="#services">Serviços</a></li>
		<li><a href="#contact">Contato</a></li>
	</ul>

	<ul class="right">
		<li>
			<a href="http://wa.me/5571999112217"
				><img src={whatsapp} alt="Ícone do Whatsapp" height="24" /></a
			>
		</li>
		<li>
			<a href="https://www.instagram.com/optimusjrautomacao/"
				><img src={instagram} alt="Ícone do Instagram" height="24" /></a
			>
		</li>
		<li>
			<a href="https://br.linkedin.com/company/optimus-jr-automacao"
				><img src={facebook} alt="Ícone do Facebook" height="24" /></a
			>
		</li>
	</ul>
</header>

<style lang="scss">
	header {
		position: fixed;
		top: 8px;
		left: 8px;
		right: 8px;

		border-radius: 64px;
		background-color: var(--color-gray);

		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
		animation: 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0s 1 slideInFromTop;

		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
	}

	@keyframes slideInFromTop {
		0% {
			transform: translateY(-200%);
		}
		100% {
			transform: translateY(0);
		}
	}

	.left {
		display: flex;
		align-items: center;
		justify-content: left;

		margin-left: 5px;
		gap: 8px;

		a {
			display: contents;
		}
	}

	.center {
		display: flex;
		align-items: center;
		justify-content: center;

		margin: 0;
		height: 40px;
		gap: 16px;

		li {
			display: contents;

			a {
				text-transform: uppercase;
				color: white;
			}
		}
	}

	.right {
		display: flex;
		align-items: center;
		justify-content: right;

		margin: 0;
		margin-right: 8px;
		gap: 8px;

		li {
			display: contents;

			a {
				display: contents;
			}
		}
	}
</style>
