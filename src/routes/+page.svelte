<script lang="ts">
	import Side1 from '$lib/Side1.svelte';

	let width = $state(100);
	let height = $state(100);
	let depth = $state(100);
	let thickness = $state(3);
	let finger = $state(10);
</script>

<div class="wrapper">
	<div class="input-wrapper">
		<div>
			<label for="width">width</label>
			<input type="number" id="width" bind:value={width} />
		</div>
		<div>
			<label for="height">height</label>
			<input type="number" id="height" bind:value={height} />
		</div>
		<div>
			<label for="depth">depth</label>
			<input type="number" id="depth" bind:value={depth} />
		</div>
		<div>
			<label for="thickness">thickness</label>
			<input type="number" id="thickness" bind:value={thickness} />
		</div>
		<div>
			<label for="finger">finger</label>
			<input type="number" id="finger" bind:value={finger} />
		</div>
	</div>

	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0.0 0.0 {width} {height}"
		width="{width}mm"
		height="{height}mm"
	>
		<Side1 x={0} y={0} {width} {height} {thickness} {finger}/>
	</svg>
</div>

<style>
	.input-wrapper {
		display: flex;
		gap: 1rem;
		margin-bottom: 1rem;
	}
	input {
		width: 5rem;
	}
</style>
