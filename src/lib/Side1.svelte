<script lang="ts">
	import { side1Data } from './domain';
	const { x, y, width, height, thickness, finger } = $props();

	let d = $derived(side1Data(x, y, width, height, thickness, finger));
</script>

<path {d} fill="none" stroke="black" stroke-width="0.20" />
