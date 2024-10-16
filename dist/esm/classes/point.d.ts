import { Vector } from "./vector";
/** Class representing a point in 2D space. */
export declare class Point {
    /** The origin point (0, 0). */
    static get Origin(): Point;
    private static _Origin;
    /** The x-coordinate of the point. */
    get x(): number;
    private _x;
    /** The y-coordinate of the point. */
    get y(): number;
    private _y;
    /** Whether the point is at the origin. */
    get isOrigin(): boolean;
    /** Creates a point. */
    constructor(x: number, y: number);
    /** Translates the point. */
    translate(vector: Vector): Point;
    translate(dx: number, dy: number): Point;
    /** Rotates the point around a pivot. */
    rotate(angle: number, pivot?: Point): Point;
    /** Calculates the distance to another point. */
    distanceTo(point: Point): number;
    /** Calculates the angle to another point. */
    angleTo(point: Point): number;
    /** Calculates the vector to another point. */
    vectorTo(point: Point): Vector;
    /** Checks if this point is equal to another point. */
    equals(point: Point): boolean;
    /** Returns a string representation of the point. */
    toText(): string;
}
