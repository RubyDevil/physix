import { Vector } from "./vector";
/** Class representing a body in the game world. */
export class Body {
    /** The shape of the body. */
    get shape() { return this._shape; }
    set shape(value) { this._shape = value; }
    /** The position of the body. (m) */
    get position() { return this._position; }
    set position(value) { this._position = value; }
    /** The linear velocity of the body. (`m/s`) */
    get linearVelocity() { return this._linearVelocity; }
    set linearVelocity(value) { this._linearVelocity = value; }
    /** The angular velocity of the body. (`rad/s`) */
    get angularVelocity() { return this._angularVelocity; }
    set angularVelocity(value) { this._angularVelocity = value; }
    /** The mass of the body. (`kg`) */
    get mass() { return this._mass; }
    set mass(value) { if (value <= 0)
        throw new RangeError("Mass must be greater than 0"); this._mass = value; }
    constructor(options) {
        /** The angle of the body. (`rad`) */
        this.angle = 0;
        this._linearVelocity = Vector.Zero;
        this._angularVelocity = 0;
        this._mass = 1;
        /** External forces to be applied on the body. */
        this.forces = [];
        this._shape = options.shape;
        this._position = options.position;
    }
    /** Adds a force to be applied to the body on the next update. */
    applyForce(force) {
        this.forces.push(force);
    }
    /** Updates the physics of the body. */
    updatePhysics(deltaTime) {
        // if (this.immovable) return;
        // // Add own movement force
        // const speedBeforeMovement = this.linearVelocity.magnitude(10);
        // const movementVector = this.calculateMovementVector(deltaTime);
        // this.linearVelocity.add(movementVector);
        // // Prevent body from accelerating faster than max speed
        // const speedAfterMovement = this.linearVelocity.magnitude(10);
        // const accelerated = speedAfterMovement > speedBeforeMovement;
        // const overMaxSpeed = speedAfterMovement > this.maxSpeed;
        // if (accelerated && overMaxSpeed) {
        //    this.linearVelocity.resize(Math.max(this.maxSpeed, speedBeforeMovement));
        // }
        // // Apply external forces
        // const netExternalForce = Vector.sum(...this.forces);
        // const externalForceAcceleration = netExternalForce.divide(this.mass);
        // this.linearVelocity.add(externalForceAcceleration);
        // // Clear forces after applying them
        // this.forces = [];
        // // Decelerate if max speed is exceeded
        // if (this.linearVelocity.magnitude(10) > this.maxSpeed) {
        //    const currentSpeed = this.linearVelocity.magnitude();
        //    const deceleration = Math.min(currentSpeed, this.deceleration * deltaTime);
        //    const newSpeed = Math.max(this.maxSpeed, currentSpeed - deceleration);
        //    this.linearVelocity.resize(newSpeed);
        // }
        // // Update position
        // const displacement = this.linearVelocity.multiply(deltaTime);
        // this.position.translate(displacement);
    }
}
//# sourceMappingURL=body.js.map