<script lang="ts">
	import { container } from '$lib/container.svelte';
	import { Img } from '$lib/image';
	import { Line } from '$lib/line';
	import { distance, imageList } from '$lib/utils';
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement | undefined = $state();

	onMount(() => {
		if (!canvas) return;

		container.width = window.innerWidth;
		container.height = window.innerHeight;

		window.addEventListener('resize', () => {
			if (!canvas) return;

			container.width = window.innerWidth;
			container.height = window.innerHeight;

			init();
		});

		$effect(() => {
			if (!canvas) return;

			canvas.width = container.width;
			canvas.height = container.height;
		});

		const ctx = canvas.getContext('2d');

		if (!ctx) return;

		let images = $state<Img[]>([]);

		const init = () => {
			images = [];

			for (let i = imageList.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[imageList[i], imageList[j]] = [imageList[j], imageList[i]];
			}

			imageList.forEach((entry) => {
				const x = Math.min(
					container.width - 1,
					Math.random() * (container.width - entry.width * 2) + entry.width
				);
				const y = Math.min(
					container.height - 1,
					Math.random() * (container.height - entry.height * 2) + entry.height
				);

				images.push(new Img(ctx, x, y, entry.width, entry.height, entry.src, entry.person));
			});
		};

		(function animate() {
			requestAnimationFrame(animate);
			ctx.clearRect(0, 0, container.width, container.height);

			images.forEach((image) => image.update());
		})();

		init();
	});
</script>

<canvas bind:this={canvas}></canvas>
