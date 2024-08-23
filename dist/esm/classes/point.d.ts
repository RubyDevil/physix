import { Vector } from "./vector";
/**
 * Class representing a point in 2D space.
 */
export declare class Point {
    /**
     * The x-coordinate of the point.
     */
    x: number;
    /**
     * The y-coordinate of the point.
     */
    y: number;
    /**
     * Creates a point.
     * @param {number} x - The x-coordinate.
     * @param {number} y - The y-coordinate.
     */
    constructor(x: number, y: number);
    /**
     * Creates a clone of the point.
     * @returns {Point} A clone of the point.
     */
    clone(): Point;
    /**
     * Checks if the point is the origin.
     * @returns {boolean} True if the point is the origin, false otherwise.
     */
    isOrigin(): boolean;
    /**
     * Sets the coordinates of the point.
     * @param {number} x - The new x-coordinate.
     * @param {number} y - The new y-coordinate.
     * @returns {Point} The resulting point.
     */
    set(x: number, y: number): Point;
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
    /**
     * Rotates the point around a pivot.
     * @param {number} angle - The angle of rotation in radians.
     * @param {Point} pivot - The pivot point to rotate around.
     * @returns {Point} The resulting point.
     */
    rotate(angle: number, pivot?: Point): Point;
    /**
     * Calculates the distance to another point.
     * @param {Point} point - The other point.
     * @returns {number} The distance to the other point.
     */
    distanceTo(point: Point): number;
    /**
     * Calculates the angle to another point.
     * @param {Point} point - The other point.
     * @returns {number} The angle to the other point.
     */
    angleTo(point: Point): number;
    /**
     * Calculates the vector to another point.
     * @param {Point} point - The other point.
     * @returns {Vector} The vector to the other point.
     */
    vectorTo(point: Point): Vector;
    /**
     * Checks if this point is equal to another point.
     * @param {Point} point - The other point.
     * @returns {boolean} True if the points are equal, false otherwise.
     */
    equals(point: Point): boolean;
    /**
     * Returns a string representation of the point.
     * @returns {string} The string representation of the point.
     */
    toText(): string;
    /**
     * Creates a point at the origin.
     * @returns {Point} A point at the origin.
     */
    static Origin(): Point;
}
//# sourceMappingURL=point.d.ts.map