/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPathSegments = exports.get = exports.getArrayValue = exports.isEmpty = exports.isObj = void 0;
/**
 *
 * @param value any - Check if values is Javascript Object or not
 * @returns bool - [TRUE | FALSE]
 */
function isObj(value) {
    var type = typeof value;
    return value !== null && (type === "object" || type === "function");
}
exports.isObj = isObj;
// function isSet(obj) {
//   if (undefined == obj) return false
//   return true;
// }
/**
 * Check if Object is empty or not
 * @param obj Object
 * @returns bool - [TRUE | FALSE]
 */
function isEmpty(obj) {
    if (undefined == obj)
        return true;
    for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop))
            return false;
    }
    return JSON.stringify(obj) === JSON.stringify({});
}
exports.isEmpty = isEmpty;
/**
 * Convert dot notation "app.appName" to array of strings ['app', 'appName']
 * @param path: string - "app.appName"
 * @returns strings[] - ['app', 'appName']
 */
function getPathSegments(path) {
    var pathArray = path.split(".");
    var parts = [];
    for (var i = 0; i < pathArray.length; i++) {
        var p = pathArray[i];
        while (p[p.length - 1] === "\\" && pathArray[i + 1] !== undefined) {
            p = p.slice(0, -1) + ".";
            p += pathArray[++i];
        }
        parts.push(p);
    }
    var disallowedKeys = ["__proto__", "prototype", "constructor"];
    var isValidPath = function (pathSegments) { return !pathSegments.some(function (segment) { return disallowedKeys.includes(segment); }); };
    if (!isValidPath(parts)) {
        return [];
    }
    return parts;
}
exports.getPathSegments = getPathSegments;
/**
 * Get Value from Javascript Objects using dot notation
 * @param object Object - {student : {name: 'test'}}
 * @param path string - 'student.name'
 * @param value any - Returns default value if values is undefined on object
 */
function get(object, path, value) {
    if (value === void 0) { value = null; }
    if (!isObj(object) || typeof path !== "string") {
        // return value === undefined ? object : value;
        return value;
    }
    var pathArray = getPathSegments(path);
    if (pathArray.length === 0) {
        return;
    }
    // console.log(pathArray)
    return getArrayValue(object, pathArray, value);
}
exports.get = get;
/**
 * Get Value from Javascript Objects using array of strings
 * @param object Object - {student : {name: 'test'}}
 * @param path string - ['student', 'name']
 * @param value any - Returns default value if values is undefined on object
 */
function getArrayValue(obj, props, defaultValue) {
    if (props === void 0) { props = []; }
    if (defaultValue === void 0) { defaultValue = null; }
    if (undefined == obj || isEmpty(obj))
        return defaultValue;
    props.forEach(function (element) {
        // console.log(element, obj)
        if (undefined == obj || isEmpty(obj) || !Object.prototype.hasOwnProperty.call(obj, element)) {
            obj = defaultValue;
            return;
        }
        obj = obj[element] ? obj[element] : defaultValue; // if obj[element]==null then return defaultValue
    });
    return obj;
}
exports.getArrayValue = getArrayValue;

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=index.js.map