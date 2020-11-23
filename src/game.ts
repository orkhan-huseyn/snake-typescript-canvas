import { Snake } from "./snake";
import { Fruit } from "./fruit";
import { ctx, canvas } from "./canvas";

export class Game {
  private snake: Snake;
  private fruit: Fruit;

  constructor() {
    this.snake = new Snake();
    this.fruit = new Fruit();
  }

  start() {
    this.initializeEventListeners();
    this.fruit.pickLocation();

    setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.fruit.draw();
      this.snake.update();
      this.snake.draw();

      if (this.snake.eat(this.fruit)) {
        this.fruit.pickLocation();
      }
    }, 250);
  }

  initializeEventListeners() {
    window.addEventListener("keydown", (event: KeyboardEvent) => {
      const direction = event.key.replace("Arrow", "");
      this.snake.changeDirection(direction);
    });
  }
}
