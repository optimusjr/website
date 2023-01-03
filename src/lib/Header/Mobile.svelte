<ul class="center">
	<li><a href="#about">Sobre Nós</a></li>
	<li><a href="#services">Serviços</a></li>
	<li><a href="#contact">Contato</a></li>

	<li>
		<a href="/budget" class="Button">
			<div>Faça um Orçamento</div>
		</a>
	</li>
</ul>

<style lang="scss">
	@use '../styles/transitions.scss';

	a {
		@extend %opacityTransition;

		min-height: 24px;

		font-size: 1.1rem;
		color: #ffffff;
	}

	ul {
		grid-column: 1/-1;

		padding: 0 64px;
		margin: auto;

		border-top: rgba(255, 255, 255, 0.6) 1px solid;
	}

	li {
		text-align: center;
		list-style: none;

		padding: 16px 0;
	}
</style>
