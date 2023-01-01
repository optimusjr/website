<script>
	import icon from '$lib/images/icon.svg';
	import wordmark from '$lib/images/wordmark.svg';
	import arrow from '$lib/images/icons/arrow-right.svg';
	import menu from '$lib/images/icons/menu.svg';
</script>

<header>
	<div class="left">
		<a href="/">
			<div class="iconWrapper">
				<img src={icon} alt="Ícone da OPTIMUS Jr." height="36" width="36" />
			</div>
			<img src={wordmark} alt="OPTIMUS Jr. escrito em letras brancas" height="16" />
		</a>
	</div>

	<ul class="center">
		<li><a href="#about">Sobre Nós</a></li>
		<li><a href="#services">Serviços</a></li>
		<li><a href="#contact">Contato</a></li>
	</ul>

	<div class="right">
		<a href="/budget" class="Button">
			<div>Faça um Orçamento</div>
			<img src={arrow} alt="Seta apontando para direita" height="24" width="24" />
		</a>
	</div>

	<div class="mobile">
		<button class="Button">
			<img src={menu} alt="Seta apontando para direita" height="24" width="24" />
		</button>
	</div>
</header>

<style lang="scss">
	header {
		position: absolute;
		top: 16px;
		left: 64px;
		right: 64px;

		border-radius: 64px;
		background-color: var(--color-gray);

		display: grid;
		grid-template-columns: 1fr 1fr 1fr;

		@media (max-width: 920px) {
			left: 32px;
			right: 32px;
		}

		@media (max-width: 425px) {
			left: 16px;
			right: 16px;
		}

		@media (max-width: 856px) {
			grid-template-columns: 1fr 1fr;
		}
	}

	.left {
		display: flex;
		align-items: center;
		justify-content: left;

		a {
			display: contents;
		}

		.iconWrapper {
			display: flex;
			align-items: center;
			justify-content: center;

			aspect-ratio: 1;
			width: auto;
			height: 100%;
			line-height: 0;
		}
	}

	.center {
		display: flex;
		align-items: center;
		justify-content: center;

		margin: 0;
		gap: 16px;

		li {
			display: contents;

			a {
				@extend %opacityTransition;

				font-size: 1.1rem;
				color: #ffffff;
			}
		}

		@media (max-width: 856px) {
			display: none;
		}
	}

	.right {
		display: flex;
		align-items: center;
		justify-content: right;

		a {
			margin: 8px;

			&:hover {
				img {
					animation-name: bounceLoop;
					animation-timing-function: ease-in-out;
					animation-duration: 0.3s;
					animation-direction: alternate;
					animation-iteration-count: infinite;
				}
			}

			&:focus,
			&:active {
				background-color: var(--color-primary-dark);
			}
		}

		@media (max-width: 856px) {
			display: none;
		}
	}

	.mobile {
		display: flex;
		align-items: center;
		justify-content: right;

		button {
			margin: 8px;
		}

		@media (min-width: 857px) {
			display: none;
		}
	}

	%opacityTransition {
		transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
		opacity: 0.8;

		&:hover {
			opacity: 1;
		}
	}

	@keyframes bounceLoop {
		0% {
			transform: translateX(0);
		}

		100% {
			transform: translateX(5px);
		}
	}
</style>
