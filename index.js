"use strict";
module.exports = function(fn) {
    var result;
    var called = false;
    return function () {
        if (!called) {
            result = fn.apply(void 0, Array.prototype.slice.call(arguments));
            called = true;
        }
        return result;
    }
}
