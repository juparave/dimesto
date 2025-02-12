<script lang="ts">
	import { onMount } from 'svelte';
	import { ConsentTypes, updateConsent } from '../../analytics';

	let showBanner = false;
	let consentState = ConsentTypes.PENDING;

	onMount(() => {
		if (typeof window !== 'undefined') {
			const savedConsent = localStorage.getItem('cookieConsent');
			if (savedConsent && Object.values(ConsentTypes).includes(savedConsent)) {
				consentState = savedConsent;
				if (savedConsent === ConsentTypes.ACCEPTED) {
					updateConsent(ConsentTypes.ACCEPTED);
				}
			} else {
				showBanner = true;
			}
		}
	});

	function handleConsent(accepted: boolean) {
		if (typeof window === 'undefined') return;

		const consentType = accepted ? ConsentTypes.ACCEPTED : ConsentTypes.REJECTED;
		localStorage.setItem('cookieConsent', consentType);
		consentState = consentType;
		showBanner = false;

		if (accepted) {
			updateConsent(ConsentTypes.ACCEPTED);
		}
	}
</script>

{#if showBanner && consentState === ConsentTypes.PENDING}
	<div
		class="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between bg-gray-800 p-4 text-white"
	>
		<p class="text-sm">Usamos cookies para mejorar tu experiencia. ¿Aceptas el uso de cookies?</p>
		<div class="flex gap-2">
			<button
				on:click={() => handleConsent(true)}
				class="rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600"
			>
				Aceptar
			</button>
			<button
				on:click={() => handleConsent(false)}
				class="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
			>
				Rechazar
			</button>
		</div>
	</div>
{/if}
