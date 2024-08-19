/**
 * Class representing a 2D vector.
 */
export class Vector {
   /**
    * The x-coordinate of the vector.
    */
   x: number;

   /**
    * The y-coordinate of the vector.
    */
   y: number;

   /**
    * Creates a vector.
    * @param {number} x - The x-coordinate.
    * @param {number} y - The y-coordinate.
    */
   constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
   }

   /**
    * Creates a clone of the vector.
    * @returns {Vector} A clone of the vector.
    */
   clone(): Vector {
      return new Vector(this.x, this.y);
   }

   // ----- Information -----

   /**
    * Checks if the vector is a zero vector.
    * @returns {boolean} True if the vector is a zero vector, false otherwise.
    */
   isZero(): boolean {
      return this.x === 0 && this.y === 0;
   }

   /**
    * Calculates the magnitude of the vector.
    * @param {boolean} [precision] - The number of decimal places to round to.
    * @returns {number} The magnitude of the vector.
    */
   magnitude(precision?: number): number {
      return precision
         ? Math.round(Math.hypot(this.x, this.y) * 10 ** precision) / 10 ** precision
         : Math.hypot(this.x, this.y);
   }

   /**
    * Calculates the angle of the vector.
    * @returns {number} The angle of the vector.
    */
   angle(): number {
      return Math.atan2(this.y, this.x);
   }

   // ----- Transformations -----

   /**
    * Sets the coordinates of the vector.
    * @param {number} x - The new x-coordinate.
    * @param {number} y - The new y-coordinate.
    * @returns {Vector} The resulting vector.
    */
   set(x: number, y: number): Vector {
      this.x = x;
      this.y = y;
      return this;
   }

   /**
    * Adds another vector to this vector.
    * @param {Vector} vector - The vector to add.
    * @returns {Vector} The resulting vector.
    */
   add(vector: Vector): Vector {
      this.x += vector.x;
      this.y += vector.y;
      return this;
   }

   /**
    * Subtracts another vector from this vector.
    * @param {Vector} vector - The vector to subtract.
    * @returns {Vector} The resulting vector.
    */
   subtract(vector: Vector): Vector {
      this.x -= vector.x;
      this.y -= vector.y;
      return this;
   }

   /**
    * Multiplies the vector by a scalar.
    * @param {number} scalar - The scalar to multiply by.
    * @returns {Vector} The resulting vector.
    */
   multiply(scalar: number): Vector {
      this.x *= scalar;
      this.y *= scalar;
      return this;
   }

   /**
    * Divides the vector by a scalar.
    * @param {number} scalar - The scalar to divide by.
    * @returns {Vector} The resulting vector.
    */
   divide(scalar: number): Vector {
      if (scalar === 0) throw new Error("Division by zero.");
      this.x /= scalar;
      this.y /= scalar;
      return this;
   }

   /**
    * Flips the vector along the x-axis and y-axis.
    * @returns {Vector} The resulting vector.
    */
   flip(): Vector {
      this.x = -this.x;
      this.y = -this.y;
      return this;
   }

   /**
    * Flips the vector along the x-axis.
    * @returns {Vector} The resulting vector.
    */
   flipX(): Vector {
      this.x = -this.x;
      return this;
   }


   /**
    * Flips the vector along the y-axis.
    * @returns {Vector} The resulting vector.
    */
   flipY(): Vector {
      this.y = -this.y;
      return this;
   }

   /**
    * Normalizes the vector (makes it a unit vector).
    * @returns {Vector} The normalized vector.
    */
   normalize(): Vector {
      const magnitude = this.magnitude();
      return new Vector(this.x / magnitude, this.y / magnitude);
   }

   /**
    * Resizes the vector to have the specified magnitude.
    * @param {number} magnitude - The new magnitude for the vector.
    * @returns {Vector} The resulting vector.
    */
   resize(magnitude: number): Vector {
      if (this.isZero()) return this;
      return this.multiply(magnitude / this.magnitude());
   }

   /**
    * Clamps the vector's magnitude to a specified range.
    * @param {number} min - The minimum magnitude.
    * @param {number} max - The maximum magnitude.
    * @returns {Vector} The clamped vector.
    */
   clamp(min: number, max: number): Vector {
      const clampedMagnitude = Math.max(min, Math.min(this.magnitude(), max));
      return this.resize(clampedMagnitude);
   }

   /**
    * Rotates the vector by a specified angle.
    * @param {number} angle - The angle to rotate by.
    * @returns {Vector} The resulting vector.
    */
   rotate(angle: number): Vector {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const x = this.x * cos - this.y * sin;
      const y = this.x * sin + this.y * cos;
      this.x = x;
      this.y = y;
      return this;
   }

   // ----- Other -----

   /**
    * Checks if the vector is equal to another vector.
    * @param {Vector} vector - The other vector.
    * @returns {boolean} True if the vectors are equal, false otherwise.
    */
   equals(vector: Vector): boolean {
      return this.x === vector.x && this.y === vector.y;
   }

   /**
    * Returns a string representation of the vector.
    * @param {string} [notation="rectangular"] - The notation to use, either "rectangular" or "polar".
    * @returns {string} A string representation of the vector.
    */
   toText(notation: "rectangular" | "polar" = "rectangular"): string {
      if (notation === "rectangular") {
         return `Vector(${this.x}, ${this.y})`;
      } else if (notation === "polar") {
         return `Vector(${this.magnitude()} ∠ ${this.angle()}°)`;
      } else {
         throw new Error("Invalid notation.");
      }
   }

   // ----- Static -----

   /**
    * Creates a zero vector.
    * @returns {Vector} A zero vector.
    */
   static Zero(): Vector {
      return new Vector(0, 0);
   }

   /**
    * Creates a vector from polar coordinates (magnitude and angle).
    * @param {number} magnitude - The magnitude.
    * @param {number} angle - The angle.
    * @returns {Vector} The resulting vector.
    */
   static fromPolar(magnitude: number, angle: number): Vector {
      return new Vector(magnitude * Math.cos(angle), magnitude * Math.sin(angle));
   }

   /**
    * Creates a unit vector from an angle.
    * @param {number} angle - The angle.
    * @returns {Vector} The resulting unit vector.
    */
   static fromAngle(angle: number): Vector {
      return new Vector(Math.cos(angle), Math.sin(angle));
   }

   /**
    * Calculates the dot product of two vectors.
    * @param {Vector} vector1 - The first vector.
    * @param {Vector} vector2 - The second vector.
    * @returns {number} The dot product of the two vectors.
    */
   static dotProduct(vector1: Vector, vector2: Vector): number {
      return vector1.x * vector2.x + vector1.y * vector2.y;
   }

   /**
    * Calculates the cross product of two vectors.
    * @param {Vector} vector1 - The first vector.
    * @param {Vector} vector2 - The second vector.
    * @returns {number} The cross product of the two vectors.
    */
   static crossProduct(vector1: Vector, vector2: Vector): number {
      return vector1.x * vector2.y - vector1.y * vector2.x;
   }

   /**
    * Calculates the sum of several vectors.
    * @param {...Vector} vectors - The vectors to combine.
    * @returns {Vector} The resulting vector.
    */
   static combine(...vectors: Vector[]): Vector {
      return vectors.reduce((sum, vector) => sum.add(vector), Vector.Zero());
   }
}
