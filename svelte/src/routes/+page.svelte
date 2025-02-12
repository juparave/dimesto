<!-- src/routes/+page.svelte -->
<script>
	import AdSense from '$lib/components/AdSense.svelte';
	import Random from '$lib/components/Random.svelte';
</script>

<svelte:head>
	<title>DiMesto</title>
	<meta
		name="description"
		content="Calculadoras en línea para México. Calcula fácilmente la propina, el pago de tu auto y más."
	/>
	<meta
		name="keywords"
		content="calculadora de pagos, calculadora de propina, propina calculadora, propina México, calcular propina, dividir cuenta, herramienta propina"
	/>
	<meta name="author" content="DiMesto" />
	<meta name="robots" content="index, follow" />

	<!-- Open Graph -->
	<meta property="og:title" content="Calculadoras móviles | CalculaMesto" />
	<meta
		property="og:description"
		content="Calculadoras en línea para México. Calcula fácilmente la propina, el pago de tu auto y más."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://calculamesto.com" />
	<meta property="og:image" content="https://calculamesto.com/og-image.png" />
	<meta property="og:site_name" content="Calculadoras móviles | CaculaMesto" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Calculadoras móviles | CalculaMesto" />
	<meta
		name="twitter:description"
		content="Calcula fácilmente la propina en México. Ingresa el monto total, el porcentaje de propina y el número de personas para obtener el total por persona."
	/>
	<meta name="twitter:image" content="https://calculamesto.com/og-imagen.png" />
	<meta name="twitter:site" content="@tucuenta" />

	<!-- Móviles -->
	<meta name="theme-color" content="#3b82f6" />
</svelte:head>

<AdSense />

<Random />
