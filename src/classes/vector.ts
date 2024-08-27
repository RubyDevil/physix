/** Class representing a 2D vector. */
export class Vector {
   /** The x-coordinate of the vector. */
   get x(): number { return this._x; }
   private _x: number;

   /** The y-coordinate of the vector. */
   get y(): number { return this._y; }
   private _y: number;

   /** The magnitude of the vector. */
   get magnitude(): number {
      return this._magnitude
         ? this._magnitude
         : this._magnitude = Math.hypot(this.x, this.y);
   }
   private _magnitude?: number;

   /** The angle of the vector in radians. */
   get angle(): number {
      return this._angle
         ? this._angle
         : this._angle = Math.atan2(this.y, this.x);
   }
   private _angle?: number;

   /** Whether the vector is the zero vector. */
   get isZero(): boolean {
      return this.x === 0 && this.y === 0;
   }

   /** Creates a vector. */
   constructor(x: number, y: number) {
      this._x = x;
      this._y = y;
   }

   /** Adds another vector to this vector. */
   add(vector: Vector): Vector;
   /** Add the specified x and y values to this vector. */
   add(x: number, y: number): Vector;
   add(): Vector {
      const [x, y]: [number, number] = arguments[0] instanceof Vector
         ? [arguments[0].x, arguments[0].y]
         : [arguments[0], arguments[1]];
      return new Vector(this.x + x, this.y + y);
   }

   /** Subtracts another vector from this vector. */
   subtract(vector: Vector): Vector;
   /** Subtract the specified x and y values from this vector. */
   subtract(x: number, y: number): Vector;
   subtract(): Vector {
      const [x, y]: [number, number] = arguments[0] instanceof Vector
         ? [arguments[0].x, arguments[0].y]
         : [arguments[0], arguments[1]];
      return new Vector(this.x - x, this.y - y);
   }

   /** Multiplies the vector by a scalar. */
   multiply(scalar: number): Vector {
      return new Vector(this.x * scalar, this.y * scalar);
   }

   /** Divides the vector by a scalar. */
   divide(scalar: number): Vector {
      if (scalar === 0) throw new Error("Division by zero.");
      return new Vector(this.x / scalar, this.y / scalar);
   }

   /** Flips the vector along the x-axis and y-axis. */
   flip(): Vector {
      return new Vector(-this.x, -this.y);
   }

   /** Flips the vector along the x-axis. */
   flipX(): Vector {
      return new Vector(-this.x, this.y);
   }


   /** Flips the vector along the y-axis. */
   flipY(): Vector {
      return new Vector(this.x, -this.y);
   }

   /** Normalizes the vector (makes it a unit vector). */
   normalize(): Vector {
      return new Vector(this.x / this.magnitude, this.y / this.magnitude);
   }

   /** Rotates the vector by a specified angle */
   rotate(angle: number): Vector {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return new Vector(
         this.x * cos - this.y * sin,
         this.x * sin + this.y * cos
      );
   }

   /** Resizes the vector to have the specified magnitude.
    * @param {number} magnitude - The new magnitude for the vector. */
   resize(magnitude: number): Vector {
      if (this.isZero) return this;
      return new Vector(this.x * magnitude / this.magnitude, this.y * magnitude / this.magnitude);
   }

   /** Clamps the vector's magnitude to a specified range. */
   clamp(min: number, max: number): Vector {
      return this.resize(Math.max(min, Math.min(this.magnitude, max)));
   }

   /** Checks if the vector is equal to another vector. */
   equals(vector: Vector): boolean {
      return this.x === vector.x && this.y === vector.y;
   }

   /** Returns a string representation of the vector. */
   toText(notation: "rectangular" | "polar" = "rectangular"): string {
      if (notation === "rectangular") {
         return `Vector(${this.x}, ${this.y})`;
      } else if (notation === "polar") {
         return `Vector(${this.magnitude} ∠ ${this.angle}°)`;
      } else {
         throw new Error("Invalid notation.");
      }
   }

   /** Creates a zero vector. */
   static Zero(): Vector {
      return new Vector(0, 0);
   }

   /** Creates a vector from polar coordinates (magnitude and angle). */
   static fromPolar(magnitude: number, angle: number): Vector {
      return new Vector(magnitude * Math.cos(angle), magnitude * Math.sin(angle));
   }

   /** Creates a unit vector from an angle. */
   static fromAngle(angle: number): Vector {
      return new Vector(Math.cos(angle), Math.sin(angle));
   }

   /** Calculates the dot product of two vectors. */
   static dot(vector1: Vector, vector2: Vector): number {
      return vector1.x * vector2.x + vector1.y * vector2.y;
   }

   /** Calculates the cross product of two vectors. */
   static cross(vector1: Vector, vector2: Vector): number {
      return vector1.x * vector2.y - vector1.y * vector2.x;
   }

   /** Calculates the sum of several vectors. */
   static sum(...vectors: Vector[]): Vector {
      return vectors.reduce((sum, vector) => sum.add(vector), Vector.Zero());
   }
}
