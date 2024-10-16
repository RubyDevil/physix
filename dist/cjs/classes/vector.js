"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
/** Class representing a 2D vector. */
class Vector {
    /** The zero vector. */
    static get Zero() { return Vector._Zero; }
    /** The x-coordinate of the vector. */
    get x() { return this._x; }
    /** The y-coordinate of the vector. */
    get y() { return this._y; }
    /** The magnitude of the vector. */
    get magnitude() {
        return this._magnitude
            ? this._magnitude
            : this._magnitude = Math.hypot(this.x, this.y);
    }
    /** The angle of the vector in radians. */
    get angle() {
        return this._angle
            ? this._angle
            : this._angle = Math.atan2(this.y, this.x);
    }
    /** Whether the vector is the zero vector. */
    get isZero() {
        return this.x === 0 && this.y === 0;
    }
    /** Creates a vector. */
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    add() {
        const [x, y] = arguments[0] instanceof Vector
            ? [arguments[0].x, arguments[0].y]
            : [arguments[0], arguments[1]];
        return new Vector(this.x + x, this.y + y);
    }
    subtract() {
        const [x, y] = arguments[0] instanceof Vector
            ? [arguments[0].x, arguments[0].y]
            : [arguments[0], arguments[1]];
        return new Vector(this.x - x, this.y - y);
    }
    /** Multiplies the vector by a scalar. */
    multiply(scalar) {
        return new Vector(this.x * scalar, this.y * scalar);
    }
    /** Divides the vector by a scalar. */
    divide(scalar) {
        if (scalar === 0)
            throw new Error("Division by zero.");
        return new Vector(this.x / scalar, this.y / scalar);
    }
    /** Flips the vector along the x-axis and y-axis. */
    flip() {
        return new Vector(-this.x, -this.y);
    }
    /** Flips the vector along the x-axis. */
    flipX() {
        return new Vector(-this.x, this.y);
    }
    /** Flips the vector along the y-axis. */
    flipY() {
        return new Vector(this.x, -this.y);
    }
    /** Normalizes the vector (makes it a unit vector). */
    normalize() {
        return new Vector(this.x / this.magnitude, this.y / this.magnitude);
    }
    /** Rotates the vector by a specified angle */
    rotate(angle) {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        return new Vector(this.x * cos - this.y * sin, this.x * sin + this.y * cos);
    }
    /** Resizes the vector to have the specified magnitude.
     * @param {number} magnitude - The new magnitude for the vector. */
    resize(magnitude) {
        if (this.isZero)
            return this;
        return new Vector(this.x * magnitude / this.magnitude, this.y * magnitude / this.magnitude);
    }
    /** Clamps the vector's magnitude to a specified range. */
    clamp(min, max) {
        return this.resize(Math.max(min, Math.min(this.magnitude, max)));
    }
    /** Checks if the vector is equal to another vector. */
    equals(vector) {
        return this.x === vector.x && this.y === vector.y;
    }
    /** Returns a string representation of the vector. */
    toText(notation = "rectangular") {
        if (notation === "rectangular") {
            return `Vector(${this.x}, ${this.y})`;
        }
        else if (notation === "polar") {
            return `Vector(${this.magnitude} ∠ ${this.angle}°)`;
        }
        else {
            throw new Error("Invalid notation.");
        }
    }
    /** Creates a vector from polar coordinates (magnitude and angle). */
    static fromPolar(magnitude, angle) {
        return new Vector(magnitude * Math.cos(angle), magnitude * Math.sin(angle));
    }
    /** Creates a unit vector from an angle. */
    static fromAngle(angle) {
        return new Vector(Math.cos(angle), Math.sin(angle));
    }
    /** Calculates the dot product of two vectors. */
    static dot(vector1, vector2) {
        return vector1.x * vector2.x + vector1.y * vector2.y;
    }
    /** Calculates the cross product of two vectors. */
    static cross(vector1, vector2) {
        return vector1.x * vector2.y - vector1.y * vector2.x;
    }
    /** Calculates the sum of several vectors. */
    static sum(...vectors) {
        return vectors.reduce((sum, vector) => sum.add(vector), Vector.Zero);
    }
}
exports.Vector = Vector;
Vector._Zero = new Vector(0, 0);
//# sourceMappingURL=vector.js.map