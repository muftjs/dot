/**
 *
 * @param value any - Check if values is Javascript Object or not
 * @returns bool - [TRUE | FALSE]
 */
function isObj(value: any): boolean {
	const type = typeof value;
	return value !== null && !Array.isArray(value) && (type === "object" || type === "function");
}

/**
 * Check if Object is empty or not
 * @param obj Object
 * @returns bool - [TRUE | FALSE]
 */
function isEmpty(obj: any): boolean {
	if (undefined == obj) return true;
	for (var prop in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, prop)) return false;
	}
	return JSON.stringify(obj) === JSON.stringify({});
}

/**
 * Convert dot notation "app.appName" to array of strings ['app', 'appName']
 * @param path: string - "app.appName"
 * @returns strings[] - ['app', 'appName']
 */
function getPathSegments(path: string): string[] {
	const pathArray = path.split(".");
	const parts = [];

	for (let i = 0; i < pathArray.length; i++) {
		let p = pathArray[i];

		while (p[p.length - 1] === "\\" && pathArray[i + 1] !== undefined) {
			p = p.slice(0, -1) + ".";
			p += pathArray[++i];
		}

		parts.push(p);
	}

	const disallowedKeys = ["__proto__", "prototype", "constructor"];

	const isValidPath = (pathSegments) => !pathSegments.some((segment) => disallowedKeys.includes(segment));

	if (!isValidPath(parts)) {
		return [];
	}

	return parts;
}

/**
 * Get Value from Javascript Objects using dot notation
 * @param object Object - {student : {name: 'test'}}
 * @param path string - 'student.name'
 * @param value any - Returns default value if values is undefined on object
 */
function get(object, path, value = null): any {
	if (!isObj(object) || typeof path !== "string") {
		// return value === undefined ? object : value;
		return value;
	}

	const pathArray = getPathSegments(path);
	if (pathArray.length === 0) {
		return;
	}
	// console.log(pathArray)

	return getArrayValue(object, pathArray, value);
}

/**
 * Get Value from Javascript Objects using array of strings
 * @param object Object - {student : {name: 'test'}}
 * @param path string - ['student', 'name']
 * @param value any - Returns default value if values is undefined on object
 */
function getArrayValue(obj, props = [], defaultValue = null): any {
	if (undefined == obj || isEmpty(obj)) return defaultValue;

	props.forEach((element) => {
		// console.log(element, obj)
		if (undefined == obj || isEmpty(obj) || !Object.prototype.hasOwnProperty.call(obj, element)) {
			obj = defaultValue;
			return;
		}
		obj = obj[element] ? obj[element] : defaultValue; // if obj[element]==null then return defaultValue
	});

	return obj;
}

export const sum
= (...a: number[]) =>
	a.reduce((acc, val) => acc + val, 0);


export {
	isObj,
	// isSet,
	isEmpty,
	getArrayValue,
	get,
	getPathSegments,
};