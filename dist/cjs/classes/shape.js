"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Polygon = exports.Circle = exports.Shape = void 0;
// =================================================================================================
/**
 * Base class representing a shape in 2D space.
 * @abstract
 */
class Shape {
    constructor() {
        if (new.target === Shape)
            throw new TypeError("Shape is an abstract class and cannot be instantiated directly.");
    }
}
exports.Shape = Shape;
// =================================================================================================
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    updatePosition(center, orientation) {
        this.center = center;
    }
    contains(point) {
        return this.center.distanceTo(point) <= this.radius;
    }
    intersects(body) {
        if (body instanceof Circle) {
            return this.center.distanceTo(body.center) <= this.radius + body.radius;
        }
        else {
            throw new Error("Method not implemented.");
        }
    }
}
exports.Circle = Circle;
// =================================================================================================
class Polygon extends Shape {
    constructor(vertices) {
        if (new.target === Polygon)
            throw new TypeError("Polygon is an abstract class and cannot be instantiated directly.");
        super();
        if (vertices.length < 3)
            throw new RangeError("A polygon must have at least 3 vertices.");
        else
            this.originalVertices = vertices;
    }
    updatePosition(center, orientation) {
        this.center = center;
        this.vertices = this.originalVertices.map((vertex) => vertex.rotate(orientation).translate(center.x, center.y));
    }
}
exports.Polygon = Polygon;
// =================================================================================================
//# sourceMappingURL=shape.js.map