export class Line {
	constructor(
		private readonly ctx: CanvasRenderingContext2D,
		private readonly x1: number,
		private readonly y1: number,
		private readonly x2: number,
		private readonly y2: number,
		private readonly color: string,
		private readonly Linewidth: number
	) {}

  /**
   * Draws a line on the canvas
   */
  draw = () => {
    this.ctx.beginPath();
    this.ctx.moveTo(this.x1, this.y1);
    this.ctx.lineTo(this.x2, this.y2);
    this.ctx.strokeStyle = `${this.color}`;
    this.ctx.lineWidth = this.Linewidth;
    this.ctx.stroke();
    this.ctx.closePath();
  }
}
