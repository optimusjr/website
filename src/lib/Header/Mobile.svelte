<ul class="center">
	<li><a href="#about">Sobre Nós</a></li>
	<li><a href="#services">Serviços</a></li>
	<li><a href="#contact">Contato</a></li>
</ul>

<style lang="scss">
	@use '../styles/transitions.scss';

	a {
		@extend %opacityTransition;

		font-size: 1.1rem;
		color: #ffffff;
	}

	ul {
		grid-column: 1/-1;

		padding: 0 32px;
		margin: auto;

		border-top: rgba(255, 255, 255, 0.8) px solid;
	}

	li {
		text-align: center;
		list-style: none;

		padding: 16px 0;
	}
</style>
