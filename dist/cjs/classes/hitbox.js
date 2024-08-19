"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolygonalHitbox = exports.RectangularHitbox = exports.CircularHitbox = exports.Hitbox = void 0;
/**
 * Base class representing a hitbox in 2D space.
 * @abstract
 */
class Hitbox {
    constructor() {
        if (new.target === Hitbox) {
            throw new TypeError("Hitbox is an abstract class and cannot be instantiated directly.");
        }
    }
}
exports.Hitbox = Hitbox;
/**
 * Class representing a circular hitbox.
 */
class CircularHitbox extends Hitbox {
    /**
     * Creates a circular hitbox.
     * @param radius - The radius of the circular hitbox.
     */
    constructor(radius) {
        super();
        this.radius = radius;
    }
}
exports.CircularHitbox = CircularHitbox;
/**
 * Class representing a rectangular hitbox.
 */
class RectangularHitbox extends Hitbox {
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
exports.RectangularHitbox = RectangularHitbox;
/**
 * Class representing a polygonal hitbox.
 */
class PolygonalHitbox extends Hitbox {
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
exports.PolygonalHitbox = PolygonalHitbox;
//# sourceMappingURL=hitbox.js.map