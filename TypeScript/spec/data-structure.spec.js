"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tuple_1 = require("../src/tuple");
describe("Tuple types", function () {
    var vector;
    var point;
    beforeEach(function () {
        vector = new tuple_1.Vector(4.3, -4.2, 3.1);
        point = new tuple_1.Point(4.3, -4.2, 3.1);
    });
    it("should have w == 1, if Point", function () {
        expect(point.w).toBe(1);
    });
    it("should have w == 0, if Vector", function () {
        expect(vector.w).toBe(0);
    });
    it("should return a point if a vector + point", function () {
        expect(vector.add(point).w).toBe(1);
    });
    it("should return a vector if 2 vectors are added", function () {
        var addedVector = vector.add(new tuple_1.Vector(1, 1, 1));
        expect(addedVector.w).toBe(0);
    });
    it("should return a point if 2 points are added", function () {
        var addedPoint = point.add(new tuple_1.Point(1, 1, 1));
        expect(addedPoint.w).toBe(0);
    });
    it("should perform addition properly", function () {
        var p = new tuple_1.Point(3, -2, 5);
        var v = new tuple_1.Vector(-2, 3, 1);
        expect(p.add(v)).toEqual(new tuple_1.Point(1, 1, 6));
    });
    it("should return a vector if two points are subtracted", function () {
        var p1 = new tuple_1.Point(1, 2, 3);
        var p2 = new tuple_1.Point(1, 2, 3);
        expect(p1.sub(p2).w).toBe(0);
    });
    it("should return a point if p = v", function () {
        var p = new tuple_1.Point(1, 2, 3);
        var v = new tuple_1.Vector(1, 2, 3);
        expect(p.sub(v).w).toBe(1);
    });
    it("should return a vector if two vectors are subtracted", function () {
        var v1 = new tuple_1.Vector(1, 2, 3);
        var v2 = new tuple_1.Vector(1, 2, 3);
        expect(v1.sub(v2).w).toBe(0);
    });
    it("should perform subtraction properly", function () {
        var p = new tuple_1.Point(3, -2, 5);
        var v = new tuple_1.Vector(-2, 3, 1);
        expect(p.sub(v)).toEqual(new tuple_1.Point(5, -5, 4));
    });
    it("should cast point to a tuple", function () {
        point.negate();
        expect(point).toEqual(new tuple_1.Point(-4.3, 4.2, -3.1, -1));
    });
    it("should cast vector to a tuple", function () {
        vector.negate();
        expect(vector).toEqual(new tuple_1.Vector(-4.3, 4.2, -3.1));
    });
    it("should negate points", function () {
        point.negate();
        expect(point.x).toBe(-4.3);
        expect(point.y).toBe(4.2);
        expect(point.z).toBe(-3.1);
        expect(point.w).toBe(-1);
    });
    it("should negate vectors", function () {
        vector.negate();
        expect(vector.x).toBe(-4.3);
        expect(vector.y).toBe(4.2);
        expect(vector.z).toBe(-3.1);
        expect(vector.w).toBe(0);
    });
    it("should multiply a point by a scalar", function () {
        var expected = new tuple_1.Point(point.x * 2, point.y * 2, point.z * 2, point.w * 2);
        expect(point.mult(2)).toEqual(expected);
    });
    it("should multiply a vector by a scalar", function () {
        var expected = new tuple_1.Vector(vector.x * 2, vector.y * 2, vector.z * 2, vector.w * 2);
        expect(vector.mult(2)).toEqual(expected);
    });
    it("should divide a point by a scalar", function () {
        var expected = new tuple_1.Point(point.x / 2, point.y / 2, point.z / 2, point.w / 2);
        expect(point.div(2)).toEqual(expected);
    });
    it("should divide a vector by a scalar", function () {
        var expected = new tuple_1.Vector(vector.x / 2, vector.y / 2, vector.z / 2, vector.w / 2);
        expect(vector.div(2)).toEqual(expected);
    });
    it("should calculate the proper magnitude", function () {
        var v1 = new tuple_1.Vector(1, 0, 0);
        expect(v1.mag()).toBe(1);
        var v2 = new tuple_1.Vector(0, 1, 0);
        expect(v2.mag()).toBe(1);
        var v3 = new tuple_1.Vector(0, 0, 1);
        expect(v3.mag()).toBe(1);
        var v4 = new tuple_1.Vector(1, 2, 3);
        var sqr = Math.sqrt(14);
        expect(v4.mag()).toBe(sqr);
        var v5 = new tuple_1.Vector(-1, -2, -3);
        expect(v5.mag()).toBe(sqr);
    });
});
