import { Point } from "./point";
/**
 * Base class representing a shape in 2D space.
 * @abstract
 */
export declare abstract class Shape {
    /** The center point of the shape. */
    center: Point;
    constructor();
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
export declare class Circle extends Shape {
    /** The radius of the circle. */
    radius: number;
    constructor(radius: number);
    updatePosition(center: Point, orientation: number): void;
    contains(point: Point): boolean;
    intersects(body: Shape): boolean;
}
export declare abstract class Polygon extends Shape {
    /** The original positions of the vertices of the polygon. */
    protected originalVertices: Point[];
    /** The computed positions of the vertices of the polygon. */
    vertices: Point[];
    constructor(vertices: Point[]);
    updatePosition(center: Point, orientation: number): void;
}
//# sourceMappingURL=shape.d.ts.map