<script lang="ts">
	import Mobile from './Mobile.svelte';

	import icon from '$lib/icons/OPTIMUS/icon.svg';
	import wordmark from '$lib/icons/OPTIMUS/wordmark.svg';
	import arrow from '$lib/icons/arrow-right.svg';

	let showMobile = false;

	function toggleShowMobile() {
		showMobile = !showMobile;
	}
</script>

<div class="container">
	<header class:show-mobile={showMobile}>
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

		<Mobile show={showMobile} toggleShow={toggleShowMobile} />
	</header>
</div>

<style lang="scss">
	@use '../styles/animations.scss';
	@use '../styles/transitions.scss';

	.container {
		position: absolute;
		padding: 16px 64px;
		right: 0;
		left: 0;

		animation: slide-from-top 0.3s ease-in-out;

		@media (max-width: 920px) {
			padding: 16px 32px;
		}

		@media (max-width: 425px) {
			padding: 16px;
		}
	}

	header {
		border-radius: 28px;
		background-color: var(--color-gray);

		display: grid;
		grid-template-columns: 1fr 1fr 1fr;

		transition: max-height 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
		max-height: 56px;
		overflow: hidden;

		&.show-mobile {
			max-height: 233px;
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
					animation: wiggle-loop 0.3s ease-in-out infinite alternate;
				}
			}
		}

		@media (max-width: 856px) {
			display: none;
		}
	}
</style>
