<script lang="ts">
	import { flip } from 'svelte/animate';
	import { quintOut } from 'svelte/easing';

	let results: number[] = [];
	let showResults = false;

	// Color oficial del Melate
	const melateColor = '#EA0D2A';

	// Función para generar números únicos
	function generateUniqueNumbers() {
		results = [];
		showResults = false;

		// Generar 6 números únicos entre 1 y 36
		while (results.length < 6) {
			const randomNumber = Math.floor(Math.random() * 56) + 1;
			if (!results.includes(randomNumber)) {
				results.push(randomNumber);
			}
		}

		// Ordenar los números de menor a mayor
		results.sort((a, b) => a - b);

		// Mostrar los resultados con animación
		showResults = true;
	}

	// Función para crear un retraso
	function delay(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}
</script>

<section class="flex min-h-full items-center justify-center p-4">
	<div class="w-full max-w-lg rounded-lg bg-white p-4 shadow-lg">
		<h1 class="mb-6 text-center text-2xl font-bold text-slate-700">
			Generador de Números de Melate
		</h1>

		<!-- Botón para generar números -->
		<button
			on:click={generateUniqueNumbers}
			class="bg-melate hover:bg-melate/70 mb-4 flex w-full items-center justify-center gap-2 rounded-lg p-3 text-white transition-colors"
		>
			Generar Números
		</button>

		<!-- Resultados -->
		{#if showResults}
			<div class="rounded-lg bg-gray-50 p-4">
				<h2 class="mb-4 text-center text-xl font-semibold text-slate-700">
					Tus números de Melate:
				</h2>
				<div class="grid grid-cols-3 gap-4">
					{#each results as result (result)}
						<div
							animate:flip={{ delay: 200, duration: 500, easing: quintOut }}
							class="bg-melate/30 text-melate rounded-lg p-4 text-center text-2xl font-bold"
						>
							{result}
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</section>
