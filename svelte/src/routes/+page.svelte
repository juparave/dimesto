<script>
	import AdSense from '$lib/components/AdSense.svelte';
	import Lotto from '$lib/components/Lotto.svelte';
	import Random from '$lib/components/Random.svelte';

	// Título y descripción de la página principal
	const title = 'Generador de Números de Lotería y Melate - dimesto.com';
	const description =
		'Genera números aleatorios para loterías y Melate. Herramientas fáciles y rápidas para obtener combinaciones únicas y personalizadas.';
	const keywords = 'generador de números, lotería, melate, números aleatorios, dimesto';
	const author = 'dimesto.com';
	const url = 'https://dimesto.com';
	const ogImage = 'https://dimesto.com/og-image.png'; // Reemplaza con la URL de tu imagen
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta name="author" content={author} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImage} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={url} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={ogImage} />

	<link rel="canonical" href="https://dimesto.com" />
</svelte:head>

<AdSense />

<Random />

<Lotto />

<!-- Nota explicativa sobre los números aleatorios -->
<section class="flex min-h-full items-center justify-center p-4">
	<div class="mt-8 w-full max-w-lg rounded-lg bg-gray-50 p-4">
		<h3 class="mb-2 text-xl font-semibold text-melate">Nota sobre los números aleatorios</h3>
		<p class="text-gray-700">
			Los números generados por esta herramienta son <strong>pseudoaleatorios</strong>, lo que
			significa que no son 100% aleatorios. Las computadoras utilizan algoritmos matemáticos para
			simular la aleatoriedad, pero estos algoritmos dependen de una "semilla" inicial para producir
			resultados. Aunque los números parecen aleatorios, en realidad son determinados por dicha
			semilla.
		</p>
		<p class="mt-2 text-gray-700">
			Esto no afecta la utilidad de la herramienta para la mayoría de los casos, pero es importante
			tener en cuenta que no son adecuados para aplicaciones que requieren una aleatoriedad
			absoluta, como la criptografía.
		</p>
	</div>
</section>
