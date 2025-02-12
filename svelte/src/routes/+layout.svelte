<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { initGA } from '../analytics.js';
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ConsentManager from '$lib/components/ConsentManager.svelte';

	let { children } = $props();

	onMount(() => {
		initGA();
	});
</script>

<svelte:head>
	<meta name="author" content="dimesto.com" />
	<meta name="robots" content="index, follow" />
	<title>DiMesto</title>
	<!-- Move GA script after consent manager initialization -->
	{#if typeof window !== 'undefined'}
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-CQ3X3X8MSX"></script>
	{/if}
</svelte:head>

<div class="flex min-h-screen flex-col bg-gray-100">
	<ConsentManager />
	<Header />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
