/**
 * Base class representing a hitbox in 2D space.
 * @abstract
 */
export declare abstract class Hitbox {
    constructor();
}
/**
 * Class representing a circular hitbox.
 */
export declare class CircularHitbox extends Hitbox {
    /**
     * The radius of the circular hitbox.
     */
    radius: number;
    /**
     * Creates a circular hitbox.
     * @param radius - The radius of the circular hitbox.
     */
    constructor(radius: number);
}
/**
 * Class representing a rectangular hitbox.
 */
export declare class RectangularHitbox extends Hitbox {
    /**
     * The width of the rectangular hitbox.
     */
    width: number;
    /**
     * The height of the rectangular hitbox.
     */
    height: number;
    /**
     * Creates a rectangular hitbox.
     * @param width - The width of the rectangular hitbox.
     * @param height - The height of the rectangular hitbox.
     */
    constructor(width: number, height: number);
}
/**
 * Class representing a polygonal hitbox.
 */
export declare class PolygonalHitbox extends Hitbox {
    /**
     * The radius of the polygon.
     */
    radius: number;
    /**
     * The number of sides of the polygon.
     */
    sides: number;
    /**
     * Creates a polygonal hitbox.
     * @param radius - The radius of the polygon.
     * @param sides - The number of sides the polygon.
     */
    constructor(radius: number, sides: number);
}
//# sourceMappingURL=hitbox.d.ts.map