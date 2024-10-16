import { Point } from "./point";
import { Shape } from "./shape";
import { Vector } from "./vector";
export interface BodyOptions {
    shape: Shape;
    position: Point;
}
/** Class representing a body in the game world. */
export declare abstract class Body {
    /** The shape of the body. */
    get shape(): Shape;
    set shape(value: Shape);
    private _shape;
    /** The position of the body. (m) */
    get position(): Point;
    set position(value: Point);
    private _position;
    /** The angle of the body. (`rad`) */
    angle: number;
    /** The linear velocity of the body. (`m/s`) */
    get linearVelocity(): Vector;
    set linearVelocity(value: Vector);
    private _linearVelocity;
    /** The angular velocity of the body. (`rad/s`) */
    get angularVelocity(): number;
    set angularVelocity(value: number);
    private _angularVelocity;
    /** The mass of the body. (`kg`) */
    get mass(): number;
    set mass(value: number);
    private _mass;
    /** External forces to be applied on the body. */
    private forces;
    constructor(options: BodyOptions);
    /** Adds a force to be applied to the body on the next update. */
    applyForce(force: Vector): void;
    /** Updates the physics of the body. */
    protected updatePhysics(deltaTime: number): void;
}
