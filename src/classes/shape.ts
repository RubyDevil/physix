import { Point } from "./point";
import { Vector } from "./vector";

// =================================================================================================

/**
 * Base class representing a shape in 2D space.
 * @abstract
 */
export abstract class Shape {
   /** The goemetrical center point of the shape. */
   centroid: Point = Point.Origin();

   constructor() {
      if (new.target === Shape) throw new TypeError("Shape is an abstract class and cannot be instantiated directly.");
   }

   /**
    * Updates the position of the shape.
    * @param centroid - The new center of the shape.
    * @param orientation - The new orientation of the shape.
    */
   abstract updatePosition(centroid: Point, orientation: number): void;
}

// =================================================================================================

export class Circle extends Shape {
   /** The radius of the circle. */
   radius: number;

   constructor(radius: number) {
      super();
      this.radius = radius;
   }

   updatePosition(centroid: Point, orientation: number): void {
      this.centroid = centroid;
   }
}

// =================================================================================================

export class Polygon extends Shape {
   /** The original positions of the vertices of the polygon. */
   protected originalVertices: Point[];
   /** The computed positions of the vertices of the polygon. */
   vertices: Point[];

   constructor(vertices: Point[]) {
      // if (new.target === Polygon) throw new TypeError("Polygon is an abstract class and cannot be instantiated directly.");
      super();
      if (vertices.length < 3) {
         throw new RangeError("A polygon must have at least 3 vertices.");
      } else if (!Polygon.isConvex(vertices)) {
         throw new Error("A polygon must be convex.");
      } else {
         this.originalVertices = vertices;
         this.vertices = vertices;
      }
   }

   /**
    * Checks if a polygon is convex.
    * @param {Point[]} vertices - The vertices of the polygon.
    * @returns {boolean} True if the polygon is convex, false otherwise.
    */
   static isConvex(vertices: Point[]): boolean {
      let lastCrossProductSign: number | undefined;
      for (let i = 0; i < vertices.length; i++) {
         const [vertex1, vertex2, vertex3] = [vertices[i], vertices[(i + 1) % vertices.length], vertices[(i + 2) % vertices.length]];
         const [line1, line2] = [vertex1.vectorTo(vertex2), vertex2.vectorTo(vertex3)];
         const crossProduct = Vector.crossProduct(line1, line2);
         const crossProductSign = Math.sign(crossProduct);
         if (crossProductSign !== 0) {
            if (lastCrossProductSign !== undefined && crossProductSign !== lastCrossProductSign) {
               return false;
            }
            lastCrossProductSign = crossProductSign;
         }
      }
      return true;
   }

   updatePosition(center: Point, orientation: number): void {
      this.centroid = center;
      this.vertices = this.originalVertices.map((vertex) => vertex.rotate(orientation).translate(center.x, center.y));
   }
}

// =================================================================================================

export class Rectangle extends Polygon {
   /** The width of the rectangle. */
   width: number;
   /** The height of the rectangle. */
   height: number;

   constructor(width: number, height: number) {
      super([
         new Point(-width / 2, height / 2),
         new Point(width / 2, height / 2),
         new Point(width / 2, -height / 2),
         new Point(-width / 2, -height / 2)
      ]);
      this.width = width;
      this.height = height;
   }
}