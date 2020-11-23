import { columns, ctx, rows, scale } from "./canvas";

export class Fruit {
  public x: number;
  public y: number;

  pickLocation(): void {
    this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
    this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
  }

  draw(): void {
    ctx.fillStyle = "#4cafab";
    ctx.fillRect(this.x, this.y, scale, scale);
  }
}
