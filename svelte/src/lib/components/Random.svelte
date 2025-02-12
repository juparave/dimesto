<!-- src/lib/components/Random.svelte -->
<script lang="ts">
	import { flip } from 'svelte/animate';
	import { bounceInOut } from 'svelte/easing';

	let min = 1;
	let max = 60000;
	let results: number[] = [];
	let showResults = true;
	let ts: number = 0;

	type Range = { name: string; min?: number | null; max?: number | null };
	// Rangos predefinidos
	const predefinedRanges: Range[] = [
		{ name: 'Sorteo Mayor (Lotería Nacional)', min: 1, max: 60000 },
		{ name: 'Personalizado', min: null, max: null } // Opción para ingresar un rango manual
	];

	let selectedRange = predefinedRanges[0]; // Rango seleccionado por defecto

	const addItem = (n: number) => (results = [n, ...results]);

	async function generateRandomNumbers() {
		results = [];
		showResults = false;
		ts = Date.now(); // Actualizar el timestamp para forzar re-renderizado

		// Generar los números aleatorios con pausa
		for (let i = 0; i < 3; i++) {
			const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
			// results = [...results, randomNumber]; // Forzar reactividad
			addItem(randomNumber);
			showResults = true;
			await delay(1500);
		}
	}

	// Función para crear un retraso
	function delay(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	// Función para actualizar el rango seleccionado
	function updateRange(range: Range) {
		selectedRange = range;
		if (range.min !== null && range.max !== null) {
			min = range.min || 0;
			min = range.min || 0;
		}
	}
</script>

<section class="flex min-h-full items-center justify-center p-4">
	<div class="w-full max-w-lg rounded-lg bg-white p-4 shadow-lg">
		<h1 class="mb-6 text-center text-2xl font-bold">Generador de Números de Lotería</h1>

		<!-- Selector de rangos predefinidos -->
		<div class="mb-4">
			<label for="range" class="mb-2 block text-lg font-medium text-gray-700"
				>Selecciona un rango:</label
			>
			<select
				id="range"
				bind:value={selectedRange}
				on:change={() => updateRange(selectedRange)}
				class="w-full rounded-lg border border-gray-300 p-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
			>
				{#each predefinedRanges as range}
					<option value={range}>{range.name}</option>
				{/each}
			</select>
		</div>

		<div class="mb-4 grid grid-cols-2 gap-4">
			<div>
				<label for="min" class="mb-2 block text-lg font-medium text-gray-700">Mínimo</label>
				<input
					id="min"
					type="number"
					bind:value={min}
					class="w-full rounded-lg border border-gray-300 p-4 text-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
					min="0"
				/>
			</div>
			<div>
				<label for="max" class="mb-2 block text-lg font-medium text-gray-700">Máximo</label>
				<input
					id="max"
					type="number"
					bind:value={max}
					class="w-full rounded-lg border border-gray-300 p-4 text-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
					min="1"
				/>
			</div>
		</div>

		<!-- Botón para generar números -->
		<button
			on:click={generateRandomNumbers}
			class="mb-4 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-500 p-3 text-white hover:bg-blue-600"
		>
			Generar Números
		</button>

		<!-- Resultados -->
		{#if showResults}
			<div class="rounded-lg bg-gray-50 p-4">
				<h2 class="mb-4 text-center text-xl font-semibold">Tus números aleatorios:</h2>
				<div class="grid grid-cols-3 gap-4">
					{#each results as result (result + '-' + ts)}
						<div
							animate:flip={{ delay: 200, duration: 1000, easing: bounceInOut }}
							class="rounded-lg bg-blue-100 p-4 text-center text-2xl font-bold text-blue-600"
						>
							{result}
						</div>
					{/each}
				</div>
			</div>
		{:else}
			<div class="min-h-24 rounded-lg bg-gray-50 p-4"></div>
		{/if}
	</div>
</section>
