import { mouse } from '$lib/mouse.svelte';
import { getRandomColor } from '$lib/utils';

class Circle {
	maxWidth = window.innerWidth;
	maxHeight = window.innerHeight;
	maxRadius = 70;
	minRadius: number;
	readonly intersectionRadius: number = 70;
	public color: string;

	constructor(
		private readonly ctx: CanvasRenderingContext2D,
		public x: number,
		public y: number,
		private radius: number,
		private xVelocity: number,
		private yVelocity: number
	) {
		this.minRadius = radius;
		this.color = getRandomColor();
	}

	/**
	 * Draws a circle on the canvas
	 */
	draw = () => {
		this.ctx.beginPath();
		this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		this.ctx.fillStyle = this.color;
    this.ctx.strokeStyle = this.color;
		this.ctx.stroke();
		this.ctx.fill();
	};

	/**
	 * Updates the position of the circle on the canvas
	 */
	update = () => {
		if (this.x + this.radius > this.maxWidth || this.x < this.radius) {
			this.xVelocity = -this.xVelocity;
		}

		if (this.y + this.radius > this.maxHeight || this.y < this.radius) {
			this.yVelocity = -this.yVelocity;
		}

		this.x += this.xVelocity;
		this.y += this.yVelocity;

		if (
			mouse.x - this.x < this.intersectionRadius &&
			mouse.x - this.x > -this.intersectionRadius &&
			mouse.y - this.y < this.intersectionRadius &&
			mouse.y - this.y > -this.intersectionRadius
		) {
			if (this.radius < this.maxRadius) {
				this.radius += 1;
			}
		} else if (this.radius > this.minRadius) {
			this.radius -= 1;
		}

		this.draw();
	};
}

export default Circle;
