<script lang="ts">
	import { Circle } from '$lib';
	import { container } from '$lib/container.svelte';
	import { Line } from '$lib/line';
	import { mouse } from '$lib/mouse.svelte';
	import { distance } from '$lib/utils';
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

		window.addEventListener('mousemove', (event) => {
			mouse.x = event.x;
			mouse.y = event.y;
		});

		let circles = $state<Circle[]>([]);

		const init = () => {
			circles = [];

			for (let i = 0; i < 300; i++) {
				const radius = Math.random() * 5 + 2;
				const x = Math.random() * (container.width - radius * 2) + radius;
				const y = Math.random() * (container.height - radius * 2) + radius;
				const xVelocity = Math.random() - 0.5;
				const yVelocity = Math.random() - 0.5;

				circles.push(new Circle(ctx, x, y, radius, xVelocity, yVelocity));
			}
		};

		const connect = (circles: Circle[]) => {
			for (let i = 1; i < circles.length - 1; i++) {
				const firstCircle = circles[i];
				for (let j = i + 1; j < circles.length; j++) {
					const secondCircle = circles[j];

					const dist = distance(firstCircle.x, firstCircle.y, secondCircle.x, secondCircle.y);


					if (dist <= 100 && secondCircle.color === firstCircle.color) {

						new Line(
							ctx,
							secondCircle.x,
							secondCircle.y,
							firstCircle.x,
							firstCircle.y,
							secondCircle.color,
							2
						).draw();
					}
				}

				if (distance(mouse.x, mouse.y, firstCircle.x, firstCircle.y) < 100) {
					new Line(
						ctx,
						mouse.x,
						mouse.y,
						firstCircle.x,
						firstCircle.y,
						firstCircle.color,
						2
					).draw();
				}
			}
		};

		(function animate() {
			requestAnimationFrame(animate);
			ctx.clearRect(0, 0, container.width, container.height);

			circles.forEach((circle) => circle.update());
			connect(circles);
		})();

		init();
	});
</script>

<canvas bind:this={canvas}></canvas>
