<script>
	// Título de la página
	const title = 'Términos y Condiciones';
</script>

<svelte:head>
	<title>{title} - dimesto.com</title>
</svelte:head>

<section class="flex min-h-full items-center justify-center p-4">
	<div class="w-full max-w-4xl rounded-lg bg-white p-6 shadow-lg">
		<h1 class="mb-6 text-center text-3xl font-bold text-slate-700">{title}</h1>

		<!-- Contenido de los Términos y Condiciones -->
		<div class="prose prose-lg">
			<p>
				Al acceder y utilizar el sitio web <strong>dimesto.com</strong>, usted acepta cumplir con
				los siguientes términos y condiciones. Si no está de acuerdo con estos términos, por favor
				absténgase de utilizar nuestro sitio.
			</p>

			<h2 class="mt-8 text-2xl font-semibold text-slate-700">1. Uso del sitio</h2>
			<p>El uso de este sitio está sujeto a las siguientes condiciones:</p>
			<ul>
				<li>Usted debe ser mayor de 18 años o contar con el consentimiento de un tutor legal.</li>
				<li>No está permitido utilizar el sitio para fines ilegales o no autorizados.</li>
				<li>Usted es responsable de mantener la confidencialidad de su cuenta y contraseña.</li>
			</ul>

			<h2 class="mt-8 text-2xl font-semibold text-slate-700">2. Propiedad intelectual</h2>
			<p>
				Todo el contenido de este sitio, incluyendo textos, imágenes, logotipos y software, es
				propiedad de <strong>dimesto.com</strong> o de sus licenciantes y está protegido por las leyes
				de propiedad intelectual.
			</p>

			<h2 class="mt-8 text-2xl font-semibold text-slate-700">3. Limitación de responsabilidad</h2>
			<p>
				<strong>dimesto.com</strong> no será responsable por daños directos, indirectos, incidentales
				o consecuentes que resulten del uso o la imposibilidad de uso de este sitio.
			</p>

			<h2 class="mt-8 text-2xl font-semibold text-slate-700">4. Enlaces a terceros</h2>
			<p>
				Este sitio puede contener enlaces a sitios web de terceros. <strong>dimesto.com</strong> no tiene
				control sobre el contenido de estos sitios y no asume responsabilidad por ellos.
			</p>

			<h2 class="mt-8 text-2xl font-semibold text-slate-700">5. Modificaciones</h2>
			<p>
				Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento.
				Cualquier cambio será notificado a través de nuestro sitio web.
			</p>

			<h2 class="mt-8 text-2xl font-semibold text-slate-700">6. Ley aplicable</h2>
			<p>
				Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes de México,
				sin considerar sus disposiciones sobre conflictos de leyes.
			</p>

			<p class="mt-8">
				Fecha de última actualización: <strong>12 de febrero 2025</strong>.
			</p>
		</div>
	</div>
</section>
