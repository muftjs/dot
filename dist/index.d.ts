/**
 *
 * @param value any - Check if values is Javascript Object or not
 * @returns bool - [TRUE | FALSE]
 */
declare function isObj(value: any): boolean;
/**
 * Check if Object is empty or not
 * @param obj Object
 * @returns bool - [TRUE | FALSE]
 */
declare function isEmpty(obj: any): boolean;
/**
 * Convert dot notation "app.appName" to array of strings ['app', 'appName']
 * @param path: string - "app.appName"
 * @returns strings[] - ['app', 'appName']
 */
declare function getPathSegments(path: string): string[];
/**
 * Get Value from Javascript Objects using dot notation
 * @param object Object - {student : {name: 'test'}}
 * @param path string - 'student.name'
 * @param value any - Returns default value if values is undefined on object
 */
declare function get(object: any, path: any, value?: any): any;
/**
 * Get Value from Javascript Objects using array of strings
 * @param object Object - {student : {name: 'test'}}
 * @param path string - ['student', 'name']
 * @param value any - Returns default value if values is undefined on object
 */
declare function getArrayValue(obj: any, props?: any[], defaultValue?: any): any;
export { isObj, isEmpty, getArrayValue, get, getPathSegments, };
