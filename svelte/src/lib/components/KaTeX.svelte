<script lang="ts">
	import katex from 'katex';
	import 'katex/dist/katex.min.css';

	export let expression = '';
	export let displayMode = false;

	let container: any;

	$: {
		if (container) {
			katex.render(expression, container, {
				throwOnError: false,
				displayMode
			});
		}
	}
</script>

<div bind:this={container}></div>
