import { Point } from "./point";

/**
 * Abstract base class representing a hitbox in 2D space.
 */
abstract class Hitbox {
   position: Point;

   constructor(position: Point) {
      this.position = position;
   }

   /**
    * Checks if this hitbox intersects with another hitbox.
    * @param {Hitbox} other - The other hitbox to check against.
    * @returns {boolean} True if the hitboxes intersect, false otherwise.
    */
   abstract intersects(other: Hitbox): boolean;
}