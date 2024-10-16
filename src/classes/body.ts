import { Point } from "./point";
import { Shape } from "./shape";
import { Vector } from "./vector";

export interface BodyOptions {
   shape: Shape;
   position: Point;
}

/** Class representing a body in the game world. */
export abstract class Body {
   /** The shape of the body. */
   get shape() { return this._shape; }
   set shape(value) { this._shape = value; }
   private _shape: Shape;

   /** The position of the body. (m) */
   get position() { return this._position; }
   set position(value) { this._position = value; }
   private _position: Point;

   /** The angle of the body. (`rad`) */
   angle: number = 0;

   /** The linear velocity of the body. (`m/s`) */
   get linearVelocity() { return this._linearVelocity; }
   set linearVelocity(value) { this._linearVelocity = value; }
   private _linearVelocity: Vector = Vector.Zero;

   /** The angular velocity of the body. (`rad/s`) */
   get angularVelocity() { return this._angularVelocity; }
   set angularVelocity(value) { this._angularVelocity = value; }
   private _angularVelocity: number = 0;

   /** The mass of the body. (`kg`) */
   get mass() { return this._mass; }
   set mass(value) { if (value <= 0) throw new RangeError("Mass must be greater than 0"); this._mass = value; }
   private _mass: number = 1;

   /** External forces to be applied on the body. */
   private forces: Vector[] = [];

   constructor(options: BodyOptions) {
      this._shape = options.shape;
      this._position = options.position;
   }

   /** Adds a force to be applied to the body on the next update. */
   applyForce(force: Vector) {
      this.forces.push(force);
   }

   /** Updates the physics of the body. */
   protected updatePhysics(deltaTime: number): void {
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
