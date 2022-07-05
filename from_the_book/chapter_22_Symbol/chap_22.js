"use strict";
const specialMethod = Symbol("specialMethod");
const obj = {
    _id: "kf12oi",
    [specialMethod]() {
        return this._id;
    }
};

console.log(obj[specialMethod]());
console.log(obj[1]);
console.log(obj.__id);