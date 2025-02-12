<script>
	// Título de la página
	const title = 'Aviso de Privacidad';
	const description =
		'Conozca nuestro Aviso de Privacidad en dimesto.com. Aquí explicamos cómo recopilamos, usamos y protegemos sus datos personales.';
	const keywords = 'aviso de privacidad, dimesto, datos personales, privacidad';
	const author = 'dimesto.com';
	const url = 'https://dimesto.com/privacy';
	const ogImage = 'https://dimesto.com/og-image.png'; // Reemplaza con la URL de tu imagen
</script>

<svelte:head>
	<title>{title} - dimesto.com</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta name="author" content={author} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={`${title} - dimesto.com`} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImage} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={url} />
	<meta property="twitter:title" content={`${title} - dimesto.com`} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={ogImage} />
</svelte:head>

<section class="flex min-h-full items-center justify-center p-4">
	<div class="w-full max-w-4xl rounded-lg bg-white p-6 shadow-lg">
		<h1 class="mb-6 text-center text-3xl font-bold text-slate-700">{title}</h1>

		<!-- Contenido del Aviso de Privacidad -->
		<div class="prose prose-lg">
			<p>
				En cumplimiento con lo dispuesto por la <strong
					>Ley Federal de Protección de Datos Personales en Posesión de los Particulares</strong
				>, dimesto.com pone a su disposición el siguiente Aviso de Privacidad.
			</p>

			<h2 class="mt-8 text-2xl font-semibold text-slate-700">1. Responsable de los datos</h2>
			<p>
				dimesto.com, con domicilio en la Ciudad de México, es responsable del tratamiento de los
				datos personales que nos proporcione.
			</p>

			<h2 class="mt-8 text-2xl font-semibold text-slate-700">2. Datos personales recopilados</h2>
			<p>Podemos recopilar la siguiente información personal:</p>
			<ul>
				<li>Nombre completo</li>
				<li>Dirección de correo electrónico</li>
				<li>Número de teléfono</li>
				<li>Dirección IP</li>
			</ul>

			<h2 class="mt-8 text-2xl font-semibold text-slate-700">3. Finalidad del tratamiento</h2>
			<p>Los datos personales recopilados serán utilizados para las siguientes finalidades:</p>
			<ul>
				<li>Proveer los servicios solicitados.</li>
				<li>Enviar información sobre promociones y nuevos servicios.</li>
				<li>Mejorar la experiencia del usuario en nuestro sitio web.</li>
			</ul>

			<h2 class="mt-8 text-2xl font-semibold text-slate-700">4. Transferencia de datos</h2>
			<p>
				Sus datos personales no serán compartidos con terceros, salvo que sea necesario para cumplir
				con las finalidades descritas en este aviso o por requerimiento legal.
			</p>

			<h2 class="mt-8 text-2xl font-semibold text-slate-700">5. Derechos ARCO</h2>
			<p>
				Usted tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento de sus datos
				personales. Para ejercer estos derechos, envíe un correo electrónico a <a
					href="mailto:privacidad@dimesto.com"
					class="text-slate-700 hover:underline">privacidad@dimesto.com</a
				>.
			</p>

			<h2 class="mt-8 text-2xl font-semibold text-slate-700">6. Cambios al Aviso de Privacidad</h2>
			<p>
				Nos reservamos el derecho de modificar este Aviso de Privacidad en cualquier momento.
				Cualquier cambio será notificado a través de nuestro sitio web.
			</p>

			<p class="mt-8">
				Fecha de última actualización: <strong>12 de febrero 2025</strong>.
			</p>
		</div>
	</div>
</section>
