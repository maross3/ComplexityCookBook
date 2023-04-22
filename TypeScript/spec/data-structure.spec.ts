import {Point, Tuple, Vector} from "../src/tuple";

// Vector.w == 0
// Point.w == 1
describe("Tuple types", () =>{
    let vector: Tuple;
    let point: Tuple;

    beforeEach(() =>{
        vector = new Vector(4.3, -4.2,3.1);
        point = new Point(4.3, -4.2, 3.1);
    });

    it("should have w == 1, if Point",() =>{
       expect(point.w).toBe(1);
    });

    it("should have w == 0, if Vector",() =>{
        expect(vector.w).toBe(0);
    });

    it("should return a point if a vector + point", () => {
        expect(vector.add(point).w).toBe(1);
    });

    it("should return a vector if 2 vectors are added", () =>{
       let addedVector = vector.add(new Vector(1, 1, 1));
        expect(addedVector.w).toBe(0);
    });

    it("should return a point if 2 points are added", () =>{
        let addedPoint = point.add(new Point(1, 1, 1));
        expect(addedPoint.w).toBe(0);
    });

    it("should perform addition properly", () =>{
        let p = new Point(3, -2, 5);
        let v = new Vector(-2,3,1);
        expect(p.add(v)).toEqual(new Point(1, 1, 6));
    });

    it("should return a vector if two points are subtracted", () =>{
       let p1 = new Point(1, 2, 3);
       let p2 = new Point(1, 2, 3);
       expect(p1.sub(p2).w).toBe(0);
    });

    it("should return a point if p = v", () => {
        let p = new Point(1, 2, 3);
        let v = new Vector(1, 2, 3);
        expect(p.sub(v).w).toBe(1);
    });

    it("should return a vector if two vectors are subtracted", () => {
        let v1 = new Vector(1, 2, 3);
        let v2 = new Vector(1, 2, 3);
        expect(v1.sub(v2).w).toBe(0);
    });

    it("should perform subtraction properly", () =>{
        let p = new Point(3, -2, 5);
        let v = new Vector(-2,3,1);
        expect(p.sub(v)).toEqual(new Point(5, -5, 4));
    });

    it("should cast point to a tuple", () =>{
        point.negate();
        expect(point).toEqual(new Point(-4.3, 4.2, -3.1, -1));
    });

    it("should cast vector to a tuple", () =>{
        vector.negate();
        expect(vector).toEqual(new Vector(-4.3, 4.2, -3.1));
    });

    it("should negate points", () => {
        point.negate();
        expect(point.x).toBe(-4.3);
        expect(point.y).toBe(4.2);
        expect(point.z).toBe(-3.1);
        expect(point.w).toBe(-1);
    });

    it("should negate vectors", () => {
        vector.negate();
        expect(vector.x).toBe(-4.3);
        expect(vector.y).toBe(4.2);
        expect(vector.z).toBe(-3.1);
        expect(vector.w).toBe(0);
    });

    it ("should multiply a point by a scalar", () => {
        let expected = new Point(point.x * 2, point.y * 2, point.z * 2, point.w * 2);
        expect(point.mult(2)).toEqual(expected);
    });

    it ("should multiply a vector by a scalar", () => {
        let expected = new Vector(vector.x * 2, vector.y * 2, vector.z * 2, vector.w * 2);
        expect(vector.mult(2)).toEqual(expected);
    });

    it ("should divide a point by a scalar", () => {
        let expected = new Point(point.x / 2, point.y / 2, point.z / 2, point.w / 2);
        expect(point.div(2)).toEqual(expected);
    });

    it ("should divide a vector by a scalar", () => {
        let expected = new Vector(vector.x / 2, vector.y / 2, vector.z / 2, vector.w / 2);
        expect(vector.div(2)).toEqual(expected);
    });

    it ("should calculate the proper magnitude", () => {
        let v1 = new Vector(1,0,0);
        expect(v1.mag()).toBe(1);
        let v2 = new Vector(0,1,0);
        expect(v2.mag()).toBe(1);
        let v3 = new Vector(0,0,1);
        expect(v3.mag()).toBe(1);
        let v4 = new Vector(1,2,3);

        let sqr = Math.sqrt(14);
        expect(v4.mag()).toBe(sqr);
        let v5 = new Vector(-1,-2,-3);
        expect(v5.mag()).toBe(sqr);
    })
});
