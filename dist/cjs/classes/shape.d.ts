import { Point } from "./point";
/** Base class representing a shape in 2D space. */
export declare abstract class Shape {
    /** The goemetrical center point of the shape. */
    get centroid(): Point;
    protected _centroid: Point;
    protected readonly _originalCentroid: Point;
    constructor(centroid: Point);
    /** Updates the placement of the shape. */
    abstract updatePlacement(centroid: Point, ...args: any[]): void;
}
export declare class Polygon extends Shape {
    /** The rotation of the polygon. */
    get rotation(): number;
    protected _rotation: number;
    protected readonly _originalRotation: number;
    /** The vertices of the polygon. */
    get vertices(): Point[];
    protected _vertices: Point[];
    protected _originalVertices: Point[];
    constructor(vertices: Point[], rotation?: number);
    updatePlacement(centroid: Point, rotation: number): void;
    /** Checks if a polygon is convex. */
    private static isConvex;
    /** Finds the centroid of a polygon. */
    private static findCentroid;
}
