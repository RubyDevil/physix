import { Point } from "./point";
import { Vector } from "./vector";
// =================================================================================================
/** Base class representing a shape in 2D space. */
export class Shape {
    /** The goemetrical center point of the shape. */
    get centroid() { return this._centroid; }
    constructor(centroid) {
        if (new.target === Shape)
            throw new TypeError("Shape is an abstract class and cannot be instantiated directly.");
        this._originalCentroid = centroid;
        this._centroid = centroid;
    }
}
// =================================================================================================
// =================================================================================================
export class Polygon extends Shape {
    /** The rotation of the polygon. */
    get rotation() { return this._rotation; }
    /** The vertices of the polygon. */
    get vertices() { return this._vertices; }
    constructor(vertices, rotation = 0) {
        if (vertices.length < 3) {
            throw new RangeError("A polygon must have at least 3 vertices.");
        }
        else if (!Polygon.isConvex(vertices)) {
            throw new Error("A polygon must be convex.");
        }
        super(Polygon.findCentroid(vertices));
        this._originalVertices = vertices;
        this._vertices = vertices;
        this._originalRotation = rotation;
        this._rotation = rotation;
    }
    updatePlacement(centroid, rotation) {
        const displacement = this._originalCentroid.vectorTo(centroid);
        const rotationChange = rotation - this._originalRotation;
        this._centroid = centroid;
        this._vertices = this._originalVertices.map(vertex => vertex
            .rotate(rotationChange, this._originalCentroid)
            .translate(displacement));
    }
    /** Checks if a polygon is convex. */
    static isConvex(vertices) {
        let lastCrossProductSign;
        for (let i = 0; i < vertices.length; i++) {
            const vertex1 = vertices[i], vertex2 = vertices[(i + 1) % vertices.length], vertex3 = vertices[(i + 2) % vertices.length];
            const line1 = vertex1.vectorTo(vertex2), line2 = vertex2.vectorTo(vertex3);
            const crossProduct = Vector.cross(line1, line2);
            const crossProductSign = Math.sign(crossProduct);
            if (crossProductSign !== 0) {
                if (lastCrossProductSign !== undefined && crossProductSign !== lastCrossProductSign) {
                    return false;
                }
                lastCrossProductSign = crossProductSign;
            }
        }
        return true;
    }
    /** Finds the centroid of a polygon. */
    static findCentroid(vertices) {
        let sumX = 0, sumY = 0;
        for (const vertex of vertices) {
            sumX += vertex.x;
            sumY += vertex.y;
        }
        const centerX = sumX / vertices.length;
        const centerY = sumY / vertices.length;
        return new Point(centerX, centerY);
    }
}
// =================================================================================================
//# sourceMappingURL=shape.js.map