(function () {
  if (Object.clone === undefined) {
    Object.prototype.clone = function() {
      var prop,
          clonedObject = {};

      for (prop in this) {
        if (this.hasOwnProperty(prop) === true) {
          if (typeof(this[prop]) === 'object') {
            clonedObject[prop] = this.clone.call(this[prop], this[prop]);
          } else {
            clonedObject[prop] = this[prop];
          }
        }
      }

      return clonedObject;
    };
  }
}());