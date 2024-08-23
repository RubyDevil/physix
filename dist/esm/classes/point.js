import { Vector } from "./vector";
/**
 * Class representing a point in 2D space.
 */
export class Point {
    // ----- Instance -----
    /**
     * Creates a point.
     * @param {number} x - The x-coordinate.
     * @param {number} y - The y-coordinate.
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    /**
     * Creates a clone of the point.
     * @returns {Point} A clone of the point.
     */
    clone() {
        return new Point(this.x, this.y);
    }
    // ----- Information -----
    /**
     * Checks if the point is the origin.
     * @returns {boolean} True if the point is the origin, false otherwise.
     */
    isOrigin() {
        return this.x === 0 && this.y === 0;
    }
    // ----- Transformations -----
    /**
     * Sets the coordinates of the point.
     * @param {number} x - The new x-coordinate.
     * @param {number} y - The new y-coordinate.
     * @returns {Point} The resulting point.
     */
    set(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
    translate() {
        const displacement = arguments[0] instanceof Vector
            ? [arguments[0].x, arguments[0].y]
            : [arguments[0], arguments[1]];
        this.x += displacement[0];
        this.y += displacement[1];
        return this;
    }
    /**
     * Rotates the point around a pivot.
     * @param {number} angle - The angle of rotation in radians.
     * @param {Point} pivot - The pivot point to rotate around.
     * @returns {Point} The resulting point.
     */
    rotate(angle, pivot = Point.Origin()) {
        const dx = this.x - pivot.x;
        const dy = this.y - pivot.y;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        this.x = pivot.x + dx * cos - dy * sin;
        this.y = pivot.y + dx * sin + dy * cos;
        return this;
    }
    // ----- Calculations -----
    /**
     * Calculates the distance to another point.
     * @param {Point} point - The other point.
     * @returns {number} The distance to the other point.
     */
    distanceTo(point) {
        const dx = this.x - point.x;
        const dy = this.y - point.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
    /**
     * Calculates the angle to another point.
     * @param {Point} point - The other point.
     * @returns {number} The angle to the other point.
     */
    angleTo(point) {
        return Math.atan2(point.y - this.y, point.x - this.x);
    }
    /**
     * Calculates the vector to another point.
     * @param {Point} point - The other point.
     * @returns {Vector} The vector to the other point.
     */
    vectorTo(point) {
        return new Vector(point.x - this.x, point.y - this.y);
    }
    // ----- Other -----
    /**
     * Checks if this point is equal to another point.
     * @param {Point} point - The other point.
     * @returns {boolean} True if the points are equal, false otherwise.
     */
    equals(point) {
        return this.x === point.x && this.y === point.y;
    }
    /**
     * Returns a string representation of the point.
     * @returns {string} The string representation of the point.
     */
    toText() {
        return `Point(${this.x}, ${this.y})`;
    }
    // ----- Static -----
    /**
     * Creates a point at the origin.
     * @returns {Point} A point at the origin.
     */
    static Origin() {
        return new Point(0, 0);
    }
}
//# sourceMappingURL=point.js.map