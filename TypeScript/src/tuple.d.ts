export declare class Tuple {
    x: number;
    y: number;
    z: number;
    w: number;
    constructor(x: number, y: number, z: number, w: number);
    add(other: Tuple): Tuple;
    sub(other: Tuple): Tuple;
    mult(scalar: number): Tuple;
    div(scalar: number): Tuple;
    negate(): Tuple;
    mag(): number;
}
export declare class Point extends Tuple {
    constructor(x: number, y: number, z: number, w?: number);
}
export declare class Vector extends Tuple {
    constructor(x: number, y: number, z: number, w?: number);
}
