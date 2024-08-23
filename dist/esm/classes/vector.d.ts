/**
 * Class representing a 2D vector.
 */
export declare class Vector {
    /**
     * The x-coordinate of the vector.
     */
    x: number;
    /**
     * The y-coordinate of the vector.
     */
    y: number;
    /**
     * Creates a vector.
     * @param {number} x - The x-coordinate.
     * @param {number} y - The y-coordinate.
     */
    constructor(x: number, y: number);
    /**
     * Creates a clone of the vector.
     * @returns {Vector} A clone of the vector.
     */
    clone(): Vector;
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
     * Sets the coordinates of the vector.
     * @param {number} x - The new x-coordinate.
     * @param {number} y - The new y-coordinate.
     * @returns {Vector} The resulting vector.
     */
    set(x: number, y: number): Vector;
    /**
     * Adds another vector to this vector.
     * @param {Vector} vector - The vector to add.
     * @returns {Vector} The resulting vector.
     */
    add(vector: Vector): Vector;
    /**
     * Subtracts another vector from this vector.
     * @param {Vector} vector - The vector to subtract.
     * @returns {Vector} The resulting vector.
     */
    subtract(vector: Vector): Vector;
    /**
     * Multiplies the vector by a scalar.
     * @param {number} scalar - The scalar to multiply by.
     * @returns {Vector} The resulting vector.
     */
    multiply(scalar: number): Vector;
    /**
     * Divides the vector by a scalar.
     * @param {number} scalar - The scalar to divide by.
     * @returns {Vector} The resulting vector.
     */
    divide(scalar: number): Vector;
    /**
     * Flips the vector along the x-axis and y-axis.
     * @returns {Vector} The resulting vector.
     */
    flip(): Vector;
    /**
     * Flips the vector along the x-axis.
     * @returns {Vector} The resulting vector.
     */
    flipX(): Vector;
    /**
     * Flips the vector along the y-axis.
     * @returns {Vector} The resulting vector.
     */
    flipY(): Vector;
    /**
     * Normalizes the vector (makes it a unit vector).
     * @returns {Vector} The normalized vector.
     */
    normalize(): Vector;
    /**
     * Resizes the vector to have the specified magnitude.
     * @param {number} magnitude - The new magnitude for the vector.
     * @returns {Vector} The resulting vector.
     */
    resize(magnitude: number): Vector;
    /**
     * Clamps the vector's magnitude to a specified range.
     * @param {number} min - The minimum magnitude.
     * @param {number} max - The maximum magnitude.
     * @returns {Vector} The clamped vector.
     */
    clamp(min: number, max: number): Vector;
    /**
     * Rotates the vector by a specified angle.
     * @param {number} angle - The angle to rotate by.
     * @returns {Vector} The resulting vector.
     */
    rotate(angle: number): Vector;
    /**
     * Checks if the vector is equal to another vector.
     * @param {Vector} vector - The other vector.
     * @returns {boolean} True if the vectors are equal, false otherwise.
     */
    equals(vector: Vector): boolean;
    /**
     * Returns a string representation of the vector.
     * @param {string} [notation="rectangular"] - The notation to use, either "rectangular" or "polar".
     * @returns {string} A string representation of the vector.
     */
    toText(notation?: "rectangular" | "polar"): string;
    /**
     * Creates a zero vector.
     * @returns {Vector} A zero vector.
     */
    static Zero(): Vector;
    /**
     * Creates a vector from polar coordinates (magnitude and angle).
     * @param {number} magnitude - The magnitude.
     * @param {number} angle - The angle.
     * @returns {Vector} The resulting vector.
     */
    static fromPolar(magnitude: number, angle: number): Vector;
    /**
     * Creates a unit vector from an angle.
     * @param {number} angle - The angle.
     * @returns {Vector} The resulting unit vector.
     */
    static fromAngle(angle: number): Vector;
    /**
     * Calculates the dot product of two vectors.
     * @param {Vector} vector1 - The first vector.
     * @param {Vector} vector2 - The second vector.
     * @returns {number} The dot product of the two vectors.
     */
    static dotProduct(vector1: Vector, vector2: Vector): number;
    /**
     * Calculates the cross product of two vectors.
     * @param {Vector} vector1 - The first vector.
     * @param {Vector} vector2 - The second vector.
     * @returns {number} The cross product of the two vectors.
     */
    static crossProduct(vector1: Vector, vector2: Vector): number;
    /**
     * Calculates the sum of several vectors.
     * @param {...Vector} vectors - The vectors to combine.
     * @returns {Vector} The resulting vector.
     */
    static combine(...vectors: Vector[]): Vector;
}
//# sourceMappingURL=vector.d.ts.map