import { Vector } from "./vector";

/**
 * Class representing a point in 2D space.
 */
export class Point {
   /** The x-coordinate of the point. */
   get x(): number { return this._x; }
   private _x: number;

   /** The y-coordinate of the point. */
   get y(): number { return this._y }
   private _y: number;

   /** Whether the point is at the origin. */
   get isOrigin(): boolean {
      return this.x === 0 && this.y === 0;
   }

   /** Creates a point. */
   constructor(x: number, y: number) {
      this._x = x;
      this._y = y;
   }

   /** Translates the point. */
   translate(vector: Vector): Point;
   translate(dx: number, dy: number): Point;
   translate(): Point {
      const [x, y]: [number, number] = arguments[0] instanceof Vector
         ? [arguments[0].x, arguments[0].y]
         : [arguments[0], arguments[1]];
      return new Point(this.x + x, this.y + y);
   }

   /** Rotates the point around a pivot. */
   rotate(angle: number, pivot: Point = Point.Origin()): Point {
      const dx = this.x - pivot.x;
      const dy = this.y - pivot.y;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return new Point(
         pivot.x + dx * cos - dy * sin,
         pivot.y + dx * sin + dy * cos
      );
   }

   /** Calculates the distance to another point. */
   distanceTo(point: Point): number {
      return Math.sqrt((this.x - point.x) ** 2 + (this.y - point.y) ** 2);
   }

   /** Calculates the angle to another point. */
   angleTo(point: Point): number {
      return Math.atan2(point.y - this.y, point.x - this.x);
   }

   /** Calculates the vector to another point. */
   vectorTo(point: Point): Vector {
      return new Vector(point.x - this.x, point.y - this.y);
   }

   /** Checks if this point is equal to another point. */
   equals(point: Point): boolean {
      return this.x === point.x && this.y === point.y;
   }

   /** Returns a string representation of the point. */
   toText(): string {
      return `Point(${this.x}, ${this.y})`;
   }

   /** Creates a point at the origin. */
   static Origin(): Point {
      return new Point(0, 0);
   }
}
