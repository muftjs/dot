import * as dot from '../index'

const student = {
  name: 'Test',
  class: {
    rank: 1
  }
}

console.log('Student', student)

console.log(`dot.get(student, 'student.name')`, dot.get(student, 'name'));
//=> Test

console.log(`dot.get(student, 'class.rank')`, dot.get(student, 'class.rank'));
//=> 1

console.log(`dot.get(student, 'class.test', 'defalut')`, dot.get(student, 'class.test', 'defalut'));
//=> default

console.log(`dot.get(student, 'class.test')`, dot.get(student, 'class.test'));
//=> null

console.log(`dot.getArrayValue(student, ['name'])`, dot.getArrayValue(student, ['name']));
//=> Test

console.log(`dot.getArrayValue(student, ['class', 'rank'])`, dot.getArrayValue(student, ['class', 'rank']));
//=> 1

console.log(`dot.getArrayValue(student, ['class', 'test'], 'defalut')`, dot.getArrayValue(student, ['class', 'test'], 'defalut'));
//=> default

console.log(`dot.getArrayValue(student, ['class', 'test'])`, dot.getArrayValue(student, ['class', 'test']));
//=> null