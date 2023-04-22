"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = exports.Point = exports.Tuple = void 0;
var Tuple = (function () {
    function Tuple(x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
    Tuple.prototype.add = function (other) {
        this.x += other.x;
        this.y += other.y;
        this.z += other.z;
        if (this.w != other.w)
            this.w = 1;
        else
            this.w = 0;
        return this;
    };
    Tuple.prototype.sub = function (other) {
        this.x -= other.x;
        this.y -= other.y;
        this.z -= other.z;
        if (this.w != other.w)
            this.w = 1;
        else
            this.w = 0;
        return this;
    };
    Tuple.prototype.mult = function (scalar) {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;
        this.w *= scalar;
        return this;
    };
    Tuple.prototype.div = function (scalar) {
        this.x /= scalar;
        this.y /= scalar;
        this.z /= scalar;
        if (this.w !== 0)
            this.w /= scalar;
        return this;
    };
    Tuple.prototype.negate = function () {
        this.x *= -1;
        this.y *= -1;
        this.z *= -1;
        if (this.w != 0)
            this.w *= -1;
        return this;
    };
    Tuple.prototype.mag = function () {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
    };
    return Tuple;
}());
exports.Tuple = Tuple;
var Point = (function (_super) {
    __extends(Point, _super);
    function Point(x, y, z, w) {
        return _super.call(this, x, y, z, w === undefined ? 1 : w) || this;
    }
    return Point;
}(Tuple));
exports.Point = Point;
var Vector = (function (_super) {
    __extends(Vector, _super);
    function Vector(x, y, z, w) {
        return _super.call(this, x, y, z, w === undefined ? 0 : w) || this;
    }
    return Vector;
}(Tuple));
exports.Vector = Vector;
