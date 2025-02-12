<script lang="ts">
	let isMenuOpen = false;
	const toggleMenu = () => (isMenuOpen = !isMenuOpen);
</script>

<header class="bg-gray-800 text-white">
	<nav class="container mx-auto px-4 py-2">
		<div class="flex items-center justify-between">
			<a href="/" class="text-xl font-bold">DiMesto</a>

			<!-- Mobile menu button -->
			<button class="md:hidden" on:click={toggleMenu} aria-label="Abrir menú">
				<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						class:hidden={isMenuOpen}
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
					<path
						class:hidden={!isMenuOpen}
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>

			<!-- Desktop menu -->
			<div class="hidden space-x-6 md:flex">
				<a href="/random" class="hover:text-blue-300">Número Aleatorio</a>
				<a href="/lotto" class="hover:text-blue-300">Melate/Lotto</a>
				<a href="/yesorno" class="hover:text-blue-300">Si/No</a>
			</div>
		</div>

		<!-- Mobile menu -->
		<div class="md:hidden" class:hidden={!isMenuOpen}>
			<div class="flex flex-col space-y-4 pt-4">
				<a href="/random" class="hover:text-blue-300">Número Aleatorio</a>
				<a href="/lotto" class="hover:text-blue-300">Melate/Lotto</a>
				<a href="/yesorno" class="hover:text-blue-300">Si/No</a>
			</div>
		</div>
	</nav>
</header>
