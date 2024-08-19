import { Vector } from "./vector";

/**
 * Class representing a point in 2D space.
 */
export class Point {
   /**
    * The x-coordinate of the point.
    */
   x: number;

   /**
    * The y-coordinate of the point.
    */
   y: number;

   // ----- Instance -----

   /**
    * Creates a point.
    * @param {number} x - The x-coordinate.
    * @param {number} y - The y-coordinate.
    */
   constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
   }

   /**
    * Creates a clone of the point.
    * @returns {Point} A clone of the point.
    */
   clone(): Point {
      return new Point(this.x, this.y);
   }

   // ----- Information -----

   /**
    * Checks if the point is the origin.
    * @returns {boolean} True if the point is the origin, false otherwise.
    */
   isOrigin(): boolean {
      return this.x === 0 && this.y === 0;
   }

   // ----- Transformations -----

   /**
    * Sets the coordinates of the point.
    * @param {number} x - The new x-coordinate.
    * @param {number} y - The new y-coordinate.
    * @returns {Point} The resulting point.
    */
   set(x: number, y: number): Point {
      this.x = x;
      this.y = y;
      return this;
   }

   /**
    * Translates the point.
    * @param {Vector} vector - The translation vector.
    * @returns {Point} The resulting point.
    */
   translate(vector: Vector): Point;
   /**
    * Translates the point.
    * @param {number} dx - The x-coordinate displacement.
    * @param {number} dy - The y-coordinate displacement.
    * @returns {Point} The resulting point.
    */
   translate(dx: number, dy: number): Point;
   translate(): Point {
      const displacement: [number, number] = arguments[0] instanceof Vector
         ? [arguments[0].x, arguments[0].y]
         : [arguments[0], arguments[1]];
      this.x += displacement[0];
      this.y += displacement[1];
      return this;
   }

   /**
    * Rotates the point around a pivot.
    * @param {number} angle - The angle of rotation in radians.
    * @param {Point} pivot - The pivot point to rotate around.
    * @returns {Point} The resulting point.
    */
   rotate(angle: number, pivot: Point = Point.Origin()): Point {
      const dx = this.x - pivot.x;
      const dy = this.y - pivot.y;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      this.x = pivot.x + dx * cos - dy * sin;
      this.y = pivot.y + dx * sin + dy * cos;
      return this;
   }

   // ----- Calculations -----

   /**
    * Calculates the distance to another point.
    * @param {Point} point - The other point.
    * @returns {number} The distance to the other point.
    */
   distanceTo(point: Point): number {
      const dx = this.x - point.x;
      const dy = this.y - point.y;
      return Math.sqrt(dx * dx + dy * dy);
   }

   /**
    * Calculates the angle to another point.
    * @param {Point} point - The other point.
    * @returns {number} The angle to the other point.
    */
   angleTo(point: Point): number {
      return Math.atan2(point.y - this.y, point.x - this.x);
   }

   // ----- Other -----

   /**
    * Checks if this point is equal to another point.
    * @param {Point} point - The other point.
    * @returns {boolean} True if the points are equal, false otherwise.
    */
   equals(point: Point): boolean {
      return this.x === point.x && this.y === point.y;
   }

   /**
    * Returns a string representation of the point.
    * @returns {string} The string representation of the point.
    */
   toText(): string {
      return `Point(${this.x}, ${this.y})`;
   }

   // ----- Static -----

   /**
    * Creates a point at the origin.
    * @returns {Point} A point at the origin.
    */
   static Origin(): Point {
      return new Point(0, 0);
   }
}
