<script lang="ts">
	import KaTeX from '$lib/components/KaTeX.svelte';
	import Lotto from '$lib/components/Lotto.svelte';

	// Fórmula en LaTeX
	const formulaComb = String.raw`
    C(n, k) = \frac{n!}{k! \cdot (n - k)!}
  `;
</script>

<svelte:head>
	<title>Generador de Números de Lotería y Melate - dimesto.com</title>
	<meta
		name="description"
		content="Genera números aleatorios para loterías y Melate. Herramientas fáciles y rápidas para obtener combinaciones únicas y personalizadas."
	/>
	<meta
		name="keywords"
		content="generador de números, lotería, melate, números aleatorios, dimesto"
	/>
	<meta name="author" content="dimesto.com" />
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://dimesto.com/lotto" />
	<meta property="og:title" content="Generador de Números de Lotería y Melate - dimesto.com" />
	<meta
		property="og:description"
		content="Genera números aleatorios para loterías y Melate. Herramientas fáciles y rápidas para obtener combinaciones únicas y personalizadas."
	/>
	<meta property="og:image" content="https://dimesto.com/og-image.png" />
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://dimesto.com" />
	<meta property="twitter:title" content="Generador de Números de Lotería y Melate - dimesto.com" />
	<meta
		property="twitter:description"
		content="Genera números aleatorios para loterías y Melate. Herramientas fáciles y rápidas para obtener combinaciones únicas y personalizadas."
	/>
	<meta property="twitter:image" content="https://dimesto.com/og-image.png" />
	<link rel="canonical" href="https://dimesto.com/lotto" />
</svelte:head>

<Lotto />

<section class="flex min-h-full items-center justify-center p-4">
	<!-- Explicación de la probabilidad -->
	<div class="w-full max-w-lg rounded-lg bg-white p-4 shadow-lg">
		<h3 class="mb-2 text-xl font-semibold text-melate">Probabilidad de ganar</h3>
		<p class="mb-4 text-gray-700">
			La probabilidad de ganar el Melate se calcula utilizando la fórmula de combinaciones:
		</p>
		<div class="mb-4 text-gray-700">
			<KaTeX expression={formulaComb} displayMode={true} />
		</div>
		<p class="mb-4 text-gray-700">Donde:</p>
		<div class="flex items-center justify-center gap-4">
			<KaTeX expression={'\( n = 56 \)'} displayMode={true} />
			<span>(números totales)</span>
		</div>
		<div class="flex items-center justify-center gap-4">
			<KaTeX expression={'\( k = 6 \)'} displayMode={true} />
			<span>(números a seleccionar)</span>
		</div>
		<p class="mb-4 text-gray-700">El número total de combinaciones posibles es:</p>
		<div class="mb-4 text-gray-700">
			<KaTeX
				expression={'C(56, 6) = \\frac{56!}{6! \\cdot (56 - 6)!} = 32,468,436'}
				displayMode={true}
			/>
		</div>
		<p class="text-gray-700">Por lo tanto, la probabilidad de ganar es:</p>
		<div class="mb-4 text-gray-700">
			<KaTeX expression={'P = \\frac{1}{(32, 468, 436)}'} displayMode={true} />
		</div>
	</div>
</section>
