import { Vector2D } from "./vector-2d";

/**
 * Class representing a point in 2D space.
 */
export class Point2D {
   /** The x-coordinate of the point. */
   x: number;

   /** The y-coordinate of the point. */
   y: number;

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
    * Creates a copy of the point.
    * @returns {Point2D} A copy of the point.
    */
   copy(): Point2D {
      return new Point2D(this.x, this.y);
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
    * @returns {Point2D} The resulting point.
    */
   set(x: number, y: number): Point2D {
      this.x = x;
      this.y = y;
      return this;
   }

   /**
    * Translates the point.
    * @param {Vector2D} vector - The translation vector.
    * @returns {Point2D} The resulting point.
    */
   translate(vector: Vector2D): Point2D;
   /**
    * Translates the point.
    * @param {number} dx - The x-coordinate displacement.
    * @param {number} dy - The y-coordinate displacement.
    * @returns {Point2D} The resulting point.
    */
   translate(dx: number, dy: number): Point2D;
   translate(): Point2D {
      const displacement: [number, number] = arguments[0] instanceof Vector2D
         ? [arguments[0].x, arguments[0].y]
         : [arguments[0], arguments[1]];
      this.x += displacement[0];
      this.y += displacement[1];
      return this;
   }

   // ----- Calculations -----

   /**
    * Calculates the distance to another point.
    * @param {Point2D} point - The other point.
    * @returns {number} The distance to the other point.
    */
   distanceTo(point: Point2D): number {
      const dx = this.x - point.x;
      const dy = this.y - point.y;
      return Math.sqrt(dx * dx + dy * dy);
   }

   /**
    * Calculates the angle to another point.
    * @param {Point2D} point - The other point.
    * @returns {number} The angle to the other point.
    */
   angleTo(point: Point2D): number {
      return Math.atan2(point.y - this.y, point.x - this.x);
   }

   // ----- Other -----

   /**
    * Checks if this point is equal to another point.
    * @param {Point2D} point - The other point.
    * @returns {boolean} True if the points are equal, false otherwise.
    */
   equals(point: Point2D): boolean {
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
    * @returns {Point2D} A point at the origin.
    */
   static Origin(): Point2D {
      return new Point2D(0, 0);
   }
}
