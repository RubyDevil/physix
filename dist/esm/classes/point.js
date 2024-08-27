import { Vector } from "./vector";
/**
 * Class representing a point in 2D space.
 */
export class Point {
    /** The x-coordinate of the point. */
    get x() { return this._x; }
    /** The y-coordinate of the point. */
    get y() { return this._y; }
    /** Whether the point is at the origin. */
    get isOrigin() {
        return this.x === 0 && this.y === 0;
    }
    /** Creates a point. */
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    translate() {
        const [x, y] = arguments[0] instanceof Vector
            ? [arguments[0].x, arguments[0].y]
            : [arguments[0], arguments[1]];
        return new Point(this.x + x, this.y + y);
    }
    /** Rotates the point around a pivot. */
    rotate(angle, pivot = Point.Origin()) {
        const dx = this.x - pivot.x;
        const dy = this.y - pivot.y;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        return new Point(pivot.x + dx * cos - dy * sin, pivot.y + dx * sin + dy * cos);
    }
    /** Calculates the distance to another point. */
    distanceTo(point) {
        return Math.sqrt(Math.pow((this.x - point.x), 2) + Math.pow((this.y - point.y), 2));
    }
    /** Calculates the angle to another point. */
    angleTo(point) {
        return Math.atan2(point.y - this.y, point.x - this.x);
    }
    /** Calculates the vector to another point. */
    vectorTo(point) {
        return new Vector(point.x - this.x, point.y - this.y);
    }
    /** Checks if this point is equal to another point. */
    equals(point) {
        return this.x === point.x && this.y === point.y;
    }
    /** Returns a string representation of the point. */
    toText() {
        return `Point(${this.x}, ${this.y})`;
    }
    /** Creates a point at the origin. */
    static Origin() {
        return new Point(0, 0);
    }
}
//# sourceMappingURL=point.js.map