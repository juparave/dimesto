<script lang="ts">
	import { flip } from 'svelte/animate';
	import { fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let results: number[] = [];
	let additionalNumber: number | null = null;
	let showResults = false;

	const addNum = (n: number) => (results = [n, ...results]);
	const sortNum = () => results.sort((a, b) => a - b);

	// Función para generar números únicos
	async function generateUniqueNumbers() {
		results = [];
		additionalNumber = null;
		showResults = false;

		// Generar 6 números únicos entre 1 y 56
		while (results.length < 6) {
			const randomNumber = Math.floor(Math.random() * 56) + 1;
			if (!results.includes(randomNumber)) {
				addNum(randomNumber);
				sortNum();
				showResults = true;
				await delay(700);
			}
		}

		// Generar un número adicional único
		let newAdditionalNumber;
		do {
			newAdditionalNumber = Math.floor(Math.random() * 56) + 1;
		} while (results.includes(newAdditionalNumber));
		additionalNumber = newAdditionalNumber;
	}

	// Función para crear un retraso
	function delay(ms: number) {
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
			class="mb-4 flex w-full items-center justify-center gap-2 rounded-lg bg-melate p-3 text-white transition-colors hover:bg-melate/70"
		>
			Generar Números
		</button>

		<!-- Nota sobre los números -->
		<p class="mb-4 text-center text-gray-600">
			Se eligen 6 números del 1 al 56 y un número adicional.
		</p>

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
							class="rounded-lg bg-melate/30 p-4 text-center text-2xl font-bold text-melate"
						>
							{result}
						</div>
					{/each}
				</div>
				<!-- Número adicional -->
				{#if additionalNumber !== null}
					<div class="mt-4 text-center">
						<p class="text-lg font-semibold text-slate-700">Número adicional:</p>
						<div
							transition:fade={{ delay: 200, duration: 500 }}
							class="inline-block rounded-lg bg-blue-500/30 p-4 text-2xl font-bold text-blue-500"
						>
							{additionalNumber}
						</div>
					</div>
				{/if}
			</div>
		{/if}
	</div>
</section>
