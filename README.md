JavaScript Object Clone
=======================

Copies/Clones any variable so all references to the original object are stripped.

Example usage:
```
var obj1 = {
  'blah': 'hello'
};

var obj2 = obj1.clone();
delete obj1['blah'];

console.log(obj1);
 => {}
 
console.log(obj2);
 => {blah: 'hello'}
```

Without Object Clone:
```
var obj1 = {},
    obj2 = obj1;

console.log(obj1);
 => {}
 
console.log(obj2);
 => {}
 
obj1['blah'] = 'hello';

console.log(obj1);
 => {blah: 'hello'}
 
console.log(obj2);
 => {blah: 'hello'}
 
obj2['blah2'] = 'hello';

console.log(obj1);
 => {blah: 'hello', blah2: 'hello'}
 
console.log(obj2);
 => {blah: 'hello', blah2: 'hello'}

```