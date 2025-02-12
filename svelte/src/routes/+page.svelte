<script>
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

<main class="container mx-auto p-4">
	<h1 class="mb-8 text-center text-3xl font-bold">Bienvenido a dimesto.com</h1>

	<!-- Componente de Números de Lotería -->
	<div class="mb-8">
		<Random />
	</div>

	<!-- Componente de Números de Melate -->
	<div>
		<Lotto />
	</div>
</main>
