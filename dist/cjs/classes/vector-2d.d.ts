/**
 * Class representing a 2D vector.
 */
export declare class Vector2D extends Object {
    /** The x-coordinate of the vector. */
    x: number;
    /** The y-coordinate of the vector. */
    y: number;
    /**
     * Creates a vector.
     * @param {number} x - The x-coordinate.
     * @param {number} y - The y-coordinate.
     */
    constructor(x: number, y: number);
    /**
     * Creates a copy of the vector.
     * @returns {Vector2D} A copy of the vector.
     */
    copy(): Vector2D;
    /**
     * Checks if the vector is a zero vector.
     * @returns {boolean} True if the vector is a zero vector, false otherwise.
     */
    isZero(): boolean;
    /**
     * Calculates the magnitude of the vector.
     * @param {boolean} [precision] - The number of decimal places to round to.
     * @returns {number} The magnitude of the vector.
     */
    magnitude(precision?: number): number;
    /**
     * Calculates the angle of the vector.
     * @returns {number} The angle of the vector.
     */
    angle(): number;
    /**
     * Adds another vector to this vector.
     * @param {Vector2D} vector - The vector to add.
     * @returns {Vector2D} The resulting vector.
     */
    add(vector: Vector2D): Vector2D;
    /**
     * Subtracts another vector from this vector.
     * @param {Vector2D} vector - The vector to subtract.
     * @returns {Vector2D} The resulting vector.
     */
    subtract(vector: Vector2D): Vector2D;
    /**
     * Multiplies the vector by a scalar.
     * @param {number} scalar - The scalar to multiply by.
     * @returns {Vector2D} The resulting vector.
     */
    multiply(scalar: number): Vector2D;
    /**
     * Divides the vector by a scalar.
     * @param {number} scalar - The scalar to divide by.
     * @returns {Vector2D} The resulting vector.
     */
    divide(scalar: number): Vector2D;
    /**
     * Flips the vector (multiplies it by -1).
     * @returns {Vector2D} The resulting vector.
     */
    flip(): Vector2D;
    /**
     * Flips the vector along the x-axis.
     * @returns {Vector2D} The resulting vector.
     */
    flipX(): Vector2D;
    /**
     * Flips the vector along the y-axis.
     * @returns {Vector2D} The resulting vector.
     */
    flipY(): Vector2D;
    /**
     * Normalizes the vector (makes it a unit vector).
     * @returns {Vector2D} The normalized vector.
     */
    normalize(): Vector2D;
    /**
     * Resizes the vector to have the specified magnitude.
     * @param {number} magnitude - The new magnitude for the vector.
     * @returns {Vector2D} The resulting vector.
     */
    resize(magnitude: number): Vector2D;
    /**
     * Clamps the vector's magnitude to a specified range.
     * @param {number} min - The minimum magnitude.
     * @param {number} max - The maximum magnitude.
     * @returns {Vector2D} The clamped vector.
     */
    clamp(min: number, max: number): Vector2D;
    /**
     * Rotates the vector by a specified angle.
     * @param {number} angle - The angle to rotate by.
     * @returns {Vector2D} The resulting vector.
     */
    rotate(angle: number): Vector2D;
    /**
     * Checks if the vector is equal to another vector.
     * @param {Vector2D} vector - The other vector.
     * @returns {boolean} True if the vectors are equal, false otherwise.
     */
    equals(vector: Vector2D): boolean;
    /**
     * Returns a string representation of the vector.
     * @param {string} [notation="rectangular"] - The notation to use, either "rectangular" or "polar".
     * @returns {string} A string representation of the vector.
     */
    toString(notation?: "rectangular" | "polar"): string;
    /**
     * Creates a zero vector.
     * @returns {Vector2D} A zero vector.
     */
    static Zero(): Vector2D;
    /**
     * Creates a vector from polar coordinates (magnitude and angle).
     * @param {number} magnitude - The magnitude.
     * @param {number} angle - The angle.
     * @returns {Vector2D} The resulting vector.
     */
    static fromPolar(magnitude: number, angle: number): Vector2D;
    /**
     * Creates a unit vector from an angle.
     * @param {number} angle - The angle.
     * @returns {Vector2D} The resulting unit vector.
     */
    static fromAngle(angle: number): Vector2D;
    /**
     * Calculates the dot product of two vectors.
     * @param {Vector2D} vector1 - The first vector.
     * @param {Vector2D} vector2 - The second vector.
     * @returns {number} The dot product of the two vectors.
     */
    static dotProduct(vector1: Vector2D, vector2: Vector2D): number;
    /**
     * Calculates the cross product of two vectors.
     * @param {Vector2D} vector1 - The first vector.
     * @param {Vector2D} vector2 - The second vector.
     * @returns {number} The cross product of the two vectors.
     */
    static crossProduct(vector1: Vector2D, vector2: Vector2D): number;
    /**
     * Calculates the sum of several vectors.
     * @param {...Vector2D} vectors - The vectors to combine.
     * @returns {Vector2D} The resulting vector.
     */
    static combine(...vectors: Vector2D[]): Vector2D;
}
//# sourceMappingURL=vector-2d.d.ts.map