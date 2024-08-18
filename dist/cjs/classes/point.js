"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
const vector_1 = require("./vector");
/**
 * Class representing a point in 2D space.
 */
class Point {
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
        const displacement = arguments[0] instanceof vector_1.Vector
            ? [arguments[0].x, arguments[0].y]
            : [arguments[0], arguments[1]];
        this.x += displacement[0];
        this.y += displacement[1];
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
exports.Point = Point;
//# sourceMappingURL=point.js.map