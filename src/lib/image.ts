import { getRandomVelocity } from '$lib/utils';

export class Img {
	#image: HTMLImageElement | undefined;
	maxWidth = window.innerWidth;
	maxHeight = window.innerHeight;
	xVelocity = 0;
	yVelocity = 0;
	scaledWidth = 0;
	scaledHeight = 0;

	constructor(
		private readonly ctx: CanvasRenderingContext2D,
		public x: number,
		public y: number,
		public width: number,
		public height: number,
		private readonly src: string,
		readonly person: string
	) {
		this.#image = new Image(width, height);
		this.#image.src = this.src;

		this.scaledWidth = this.width * 0.5;
		this.scaledHeight = this.height * 0.5;

		this.xVelocity = getRandomVelocity();
		this.yVelocity = getRandomVelocity();

		console.log(
			`created image ${this.src} with velocity ${this.xVelocity}, ${this.yVelocity} and x ${this.x} y ${this.y}`
		);
	}

	draw = () => {
		if (this.#image) {
			this.ctx.drawImage(this.#image, this.x, this.y, this.scaledWidth, this.scaledHeight);
		}
	};

	update = () => {
		if (this.x + this.scaledWidth > this.maxWidth || this.x < 0) {
			this.xVelocity = -this.xVelocity;
		}

		if (this.y + this.scaledHeight > this.maxHeight || this.y < 0) {
			this.yVelocity = -this.yVelocity;
		}

		this.x += this.xVelocity;
		this.y += this.yVelocity;

		this.draw();
	};
}
