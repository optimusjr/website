<script lang="ts">
	import Mobile from './Mobile.svelte';

	import icon from '$lib/images/icon.svg';
	import wordmark from '$lib/images/wordmark.svg';
	import arrow from '$lib/images/icons/arrow-right.svg';

	let showMobile = false;

	function toggleShowMobile() {
		showMobile = !showMobile;
	}
</script>

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

<style lang="scss">
	@use '../styles/transitions.scss';

	header {
		position: absolute;
		top: 16px;
		left: 64px;
		right: 64px;

		border-radius: 28px;
		background-color: var(--color-gray);

		display: grid;
		grid-template-columns: 1fr 1fr 1fr;

		transition: max-height 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
		max-height: 56px;
		overflow: hidden;

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

	.show-mobile {
		max-height: 233px;
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
					animation-name: wiggle-loop;
					animation-timing-function: ease-in-out;
					animation-duration: 0.3s;
					animation-direction: alternate;
					animation-iteration-count: infinite;
				}
			}
		}

		@media (max-width: 856px) {
			display: none;
		}
	}

	@keyframes wiggle-loop {
		0% {
			transform: translateX(0);
		}

		100% {
			transform: translateX(5px);
		}
	}
</style>
