export class Tuple {
    declare x: number;
    declare y: number;
    declare z: number;
    declare w: number;

    constructor(x:number, y: number, z: number, w: number) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }

    add(other: Tuple) :Tuple {
        this.x += other.x;
        this.y += other.y;
        this.z += other.z;

        if (this.w != other.w) this.w = 1;
        else this.w = 0;

        return this;
    }
    sub(other: Tuple) :Tuple {
        this.x -= other.x;
        this.y -= other.y;
        this.z -= other.z;

        if (this.w != other.w) this.w = 1;
        else this.w = 0;

        return this;
    }

    mult(scalar: number) :Tuple {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;
        this.w *= scalar;

        return this;
    }

    div(scalar: number) :Tuple {
        this.x /= scalar;
        this.y /= scalar;
        this.z /= scalar;
        if(this.w !== 0) this.w /= scalar;
        return this;
    }
    negate() :Tuple {
        this.x *= -1;
        this.y *= -1;
        this.z *= -1;
        if(this.w != 0) this.w *= -1;
        return this;
    }

    mag() :number {
        return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2)
    }

}

export class Point extends Tuple {
    constructor(x: number, y: number, z: number, w?: number) {
        super(x, y, z, w === undefined ? 1 : w);
    }
}

export class Vector extends Tuple {
    constructor(x: number, y: number, z: number, w?: number) {
        super(x, y, z, w === undefined ? 0 : w);
    }
}
