import { Point } from "./point";

// =================================================================================================

/**
 * Base class representing a shape in 2D space.
 * @abstract
 */
export abstract class Shape {
   /** The center point of the shape. */
   center: Point;

   constructor() {
      if (new.target === Shape) throw new TypeError("Shape is an abstract class and cannot be instantiated directly.");
   }

   /**
    * Updates the position of the shape.
    * @param center - The new center of the shape.
    * @param orientation - The new orientation of the shape.
    */
   abstract updatePosition(center: Point, orientation: number): void;

   /**
    * Checks if a point is contained within the body.
    * @param point - The point to check.
    * @returns True if the point is contained within the body, false otherwise.
    */
   abstract contains(point: Point): boolean;

   /**
    * Checks if the body intersects with another body.
    * @param body - The other body to check.
    * @returns True if the bodies intersect, false otherwise.
    */
   abstract intersects(body: Shape): boolean;
}

// =================================================================================================

export class Circle extends Shape {
   /** The radius of the circle. */
   radius: number;

   constructor(radius: number) {
      super();
      this.radius = radius;
   }

   updatePosition(center: Point, orientation: number): void {
      this.center = center;
   }

   contains(point: Point): boolean {
      return this.center.distanceTo(point) <= this.radius;
   }

   intersects(body: Shape): boolean {
      if (body instanceof Circle) {
         return this.center.distanceTo(body.center) <= this.radius + body.radius;
      } else {
         throw new Error("Method not implemented.");
      }
   }
}

// =================================================================================================

export abstract class Polygon extends Shape {
   /** The original positions of the vertices of the polygon. */
   protected originalVertices: Point[];
   /** The computed positions of the vertices of the polygon. */
   vertices: Point[];

   constructor(vertices: Point[]) {
      if (new.target === Polygon) throw new TypeError("Polygon is an abstract class and cannot be instantiated directly.");
      super();
      if (vertices.length < 3) throw new RangeError("A polygon must have at least 3 vertices.");
      else this.originalVertices = vertices;
   }

   updatePosition(center: Point, orientation: number): void {
      this.center = center;
      this.vertices = this.originalVertices.map((vertex) => vertex.rotate(orientation).translate(center.x, center.y));
   }
}

// =================================================================================================
