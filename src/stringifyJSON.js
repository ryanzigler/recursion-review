// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // JSON.stringify does not like functions or undefined
  if (typeof obj === 'function') {
    return undefined;
  }
  if (obj === undefined) {
    return undefined;
  }
  // work phase, primitive types
  if (typeof obj === 'number') {
    return '' + obj;
  }
  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'boolean') {
    return '' + obj;
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  // recursive phase, objects

  if (Array.isArray(obj)) {
    // recursive case for arrays
    if (obj.length === 0) return '[]';
    var returnArray = [];
    // array.map(stringifyJSON)
    for (var i = 0; i < obj.length; i++) {
      returnArray.push(stringifyJSON(obj[i]));
    }
    return '[' + returnArray.join(',') + ']';
  }

  if (typeof obj === 'object') {
    // recursive case for objects
    var objectString = '';
    if (Object.keys(obj).length === 0) return '{}';
    for (var keys in obj) {
      if (stringifyJSON(obj[keys]) === undefined) {
        continue;
      }
      objectString += '"' + keys + '"' + ':' + stringifyJSON(obj[keys]) + ',';
    }
    objectString = objectString.slice(0, -1)
    return '{' + objectString + '}';
  }

  return undefined;
};
