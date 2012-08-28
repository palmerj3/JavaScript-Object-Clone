JavaScript Object Clone
=======================

Copies/Clones any variable so all references to the original object are stripped.

Without Object Clone:
```
var originalObject = {},
    copyObject = originalObject;
    
copyObject['test'] = 'test';
if (typeof(originalObject['test']) !== 'undefined') {
  alert('Property copied');
} else {
  alert('Property not copied');
}
```

With Object Clone:
```
var originalObject = {},
    copyObject = originalObject.clone();

copyObject['test'] = 'test';
if (typeof(originalObject['test']) !== 'undefined') {
  alert('Property copied');
} else {
  alert('Property not copied');
}
```