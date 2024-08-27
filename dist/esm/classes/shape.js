import { Point } from "./point";
import { Vector } from "./vector";
// =================================================================================================
/**
 * Base class representing a shape in 2D space.
 * @abstract
 */
export class Shape {
    constructor() {
        /** The goemetrical center point of the shape. */
        this.centroid = Point.Origin();
        if (new.target === Shape)
            throw new TypeError("Shape is an abstract class and cannot be instantiated directly.");
    }
}
// =================================================================================================
export class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    updatePosition(centroid, orientation) {
        this.centroid = centroid;
    }
}
// =================================================================================================
export class Polygon extends Shape {
    constructor(vertices) {
        // if (new.target === Polygon) throw new TypeError("Polygon is an abstract class and cannot be instantiated directly.");
        super();
        if (vertices.length < 3) {
            throw new RangeError("A polygon must have at least 3 vertices.");
        }
        else if (!Polygon.isConvex(vertices)) {
            throw new Error("A polygon must be convex.");
        }
        else {
            this.originalVertices = vertices;
            this.vertices = vertices;
        }
    }
    /**
     * Checks if a polygon is convex.
     * @param {Point[]} vertices - The vertices of the polygon.
     * @returns {boolean} True if the polygon is convex, false otherwise.
     */
    static isConvex(vertices) {
        let lastCrossProductSign;
        for (let i = 0; i < vertices.length; i++) {
            const vertex1 = vertices[i], vertex2 = vertices[(i + 1) % vertices.length], vertex3 = vertices[(i + 2) % vertices.length];
            const line1 = vertex1.vectorTo(vertex2), line2 = vertex2.vectorTo(vertex3);
            const crossProduct = Vector.cross(line1, line2);
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
    /**
     * Finds the centroid of a polygon.
     */
    static findCentroid(vertices) {
        throw new Error("Method not implemented.");
    }
    updatePosition(center, orientation) {
        this.centroid = center;
        this.vertices = this.originalVertices.map((vertex) => vertex.rotate(orientation).translate(center.x, center.y));
    }
}
// =================================================================================================
export class Rectangle extends Polygon {
    constructor(width, height) {
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
//# sourceMappingURL=shape.js.map