/**
 * Base class representing a hitbox in 2D space.
 * @abstract
 */
export class Hitbox {
    constructor() {
        if (new.target === Hitbox) {
            throw new TypeError("Hitbox is an abstract class and cannot be instantiated directly.");
        }
    }
}
/**
 * Class representing a circular hitbox.
 */
export class CircularHitbox extends Hitbox {
    /**
     * Creates a circular hitbox.
     * @param radius - The radius of the circular hitbox.
     */
    constructor(radius) {
        super();
        this.radius = radius;
    }
}
/**
 * Class representing a rectangular hitbox.
 */
export class RectangularHitbox extends Hitbox {
    /**
     * Creates a rectangular hitbox.
     * @param width - The width of the rectangular hitbox.
     * @param height - The height of the rectangular hitbox.
     */
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
}
/**
 * Class representing a polygonal hitbox.
 */
export class PolygonalHitbox extends Hitbox {
    /**
     * Creates a polygonal hitbox.
     * @param radius - The radius of the polygon.
     * @param sides - The number of sides the polygon.
     */
    constructor(radius, sides) {
        super();
        this.radius = radius;
        this.sides = sides;
    }
}
//# sourceMappingURL=hitbox.js.map