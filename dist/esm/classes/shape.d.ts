import { Point } from "./point";
/**
 * Base class representing a shape in 2D space.
 * @abstract
 */
export declare abstract class Shape {
    /** The goemetrical center point of the shape. */
    centroid: Point;
    constructor();
    /**
     * Updates the position of the shape.
     * @param centroid - The new center of the shape.
     * @param orientation - The new orientation of the shape.
     */
    abstract updatePosition(centroid: Point, orientation: number): void;
}
export declare class Circle extends Shape {
    /** The radius of the circle. */
    radius: number;
    constructor(radius: number);
    updatePosition(centroid: Point, orientation: number): void;
}
export declare class Polygon extends Shape {
    /** The original positions of the vertices of the polygon. */
    protected originalVertices: Point[];
    /** The computed positions of the vertices of the polygon. */
    vertices: Point[];
    constructor(vertices: Point[]);
    /**
     * Checks if a polygon is convex.
     * @param {Point[]} vertices - The vertices of the polygon.
     * @returns {boolean} True if the polygon is convex, false otherwise.
     */
    static isConvex(vertices: Point[]): boolean;
    /**
     * Finds the centroid of a polygon.
     */
    private static findCentroid;
    updatePosition(center: Point, orientation: number): void;
}
export declare class Rectangle extends Polygon {
    /** The width of the rectangle. */
    width: number;
    /** The height of the rectangle. */
    height: number;
    constructor(width: number, height: number);
}
