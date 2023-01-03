<script lang="ts">
	import MenuIcon from './MenuIcon.svelte';

	export let show: boolean;
	export let toggleShow: () => void;
</script>

<div class="menu-button">
	<button on:click={toggleShow} class="Button">
		<MenuIcon open={show} />
	</button>
</div>

<ul aria-hidden={!show}>
	<li class="link"><a href="#about">Sobre Nós</a></li>
	<li class="link"><a href="#services">Serviços</a></li>
	<li class="link"><a href="#contact">Contato</a></li>

	<li>
		<a href="/budget" class="Button"> Faça um Orçamento </a>
	</li>
</ul>

<style lang="scss">
	@use '../styles/transitions.scss';

	.menu-button {
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

	ul {
		grid-column: 1/-1;

		padding: 0 64px;
		padding-top: 16px;
		margin-top: 0;
		margin-bottom: 16px;

		border-top: rgba(255, 255, 255, 0.6) 1px solid;
		font-size: 1.1rem;

		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	li {
		text-align: center;
		list-style: none;
	}

	.link a {
		@extend %opacityTransition;

		color: #ffffff;
	}

	a {
		min-height: 24px;
		justify-content: center;
	}
</style>
