<script lang="ts">
	let x = $state(100);
	let y = $state(100);
	let h = $state(100);
	let thickness = $state(3);
</script>

<div class="wrapper">
	<div class="input-wrapper">
		<div>
			<label for="x">x</label>
			<input type="number" id="x" bind:value={x} />
		</div>
		<div>
			<label for="y">y</label>
			<input type="number" id="y" bind:value={y} />
		</div>
		<div>
			<label for="h">h</label>
			<input type="number" id="h" bind:value={h} />
		</div>
		<div>
			<label for="thickness">Thickness</label>
			<input type="number" id="thickness" bind:value={thickness} />
		</div>
	</div>

	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0.0 0.0 {x} {y}" width="{x}mm" height="{y}mm">
		<rect
			x="0"
			y="0"
			width={x}
			height={y}
			style="fill: #fff; stroke: #000; stroke-width: 0.2px;"
		></rect>
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
