import { isEmpty, isObj, getPathSegments, get, getArrayValue } from "./index"

test('isObj', () => {
  expect(isObj("string")).toBe(false);
});

test('isObj', () => {
  expect(isObj({})).toBe(true);
});

test('isObj', () => {
  expect(isObj([])).toBe(false);
});

test('isEmpty', () => {
  expect(isEmpty({
    name: "luci"
  })).toBe(false);
});

test('isEmpty', () => {
  expect(isEmpty({})).toBe(true);
});

test('isEmpty', () => {
  expect(isEmpty(undefined)).toBe(true);
});


test('getPathSegments', () => {
  expect(getPathSegments('app.name')).toStrictEqual(['app', 'name']);
});


const student = {
  name: 'luci',
  class: {
    rank: 1
  }
}

test('get', () => {
  expect(get(student, 'name')).toBe('luci');
});

test('get', () => {
  expect(get(student, 'class.rank')).toBe(1);
});

test('get', () => {
  expect(get(student, 'class.test', 'default')).toBe('default');
});

test('get', () => {
  expect(get(student, 'class.test')).toBe(null);
});


test('getArrayValue', () => {
  expect(getArrayValue(student, ['name'])).toBe('luci');
});

test('getArrayValue', () => {
  expect(getArrayValue(student, ['class', 'rank'])).toBe(1);
});

test('getArrayValue', () => {
  expect(getArrayValue(student, ['class', 'test'], 'default')).toBe('default');
});

test('getArrayValue', () => {
  expect(getArrayValue(student, ['class', 'test'])).toBe(null);
});