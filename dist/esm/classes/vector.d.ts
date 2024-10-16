/** Class representing a 2D vector. */
export declare class Vector {
    /** The zero vector. */
    static get Zero(): Vector;
    private static _Zero;
    /** The x-coordinate of the vector. */
    get x(): number;
    private _x;
    /** The y-coordinate of the vector. */
    get y(): number;
    private _y;
    /** The magnitude of the vector. */
    get magnitude(): number;
    private _magnitude?;
    /** The angle of the vector in radians. */
    get angle(): number;
    private _angle?;
    /** Whether the vector is the zero vector. */
    get isZero(): boolean;
    /** Creates a vector. */
    constructor(x: number, y: number);
    /** Adds another vector to this vector. */
    add(vector: Vector): Vector;
    /** Add the specified x and y values to this vector. */
    add(x: number, y: number): Vector;
    /** Subtracts another vector from this vector. */
    subtract(vector: Vector): Vector;
    /** Subtract the specified x and y values from this vector. */
    subtract(x: number, y: number): Vector;
    /** Multiplies the vector by a scalar. */
    multiply(scalar: number): Vector;
    /** Divides the vector by a scalar. */
    divide(scalar: number): Vector;
    /** Flips the vector along the x-axis and y-axis. */
    flip(): Vector;
    /** Flips the vector along the x-axis. */
    flipX(): Vector;
    /** Flips the vector along the y-axis. */
    flipY(): Vector;
    /** Normalizes the vector (makes it a unit vector). */
    normalize(): Vector;
    /** Rotates the vector by a specified angle */
    rotate(angle: number): Vector;
    /** Resizes the vector to have the specified magnitude.
     * @param {number} magnitude - The new magnitude for the vector. */
    resize(magnitude: number): Vector;
    /** Clamps the vector's magnitude to a specified range. */
    clamp(min: number, max: number): Vector;
    /** Checks if the vector is equal to another vector. */
    equals(vector: Vector): boolean;
    /** Returns a string representation of the vector. */
    toText(notation?: "rectangular" | "polar"): string;
    /** Creates a vector from polar coordinates (magnitude and angle). */
    static fromPolar(magnitude: number, angle: number): Vector;
    /** Creates a unit vector from an angle. */
    static fromAngle(angle: number): Vector;
    /** Calculates the dot product of two vectors. */
    static dot(vector1: Vector, vector2: Vector): number;
    /** Calculates the cross product of two vectors. */
    static cross(vector1: Vector, vector2: Vector): number;
    /** Calculates the sum of several vectors. */
    static sum(...vectors: Vector[]): Vector;
}
