// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  // create a result variable
  var resultArray = [];

  // function that recurs
  var searchInElements = function (node) {
    // test to see whether or not className is present
    if (node.classList) {
    // push to the result array
      if (node.classList.contains(className)) {
        resultArray.push(node);
      }
    }
    // conditional to see if there are children if so recurse
    if (node.childNodes) {
      // iteration over the childnodes and recurse on the childnodes
     _.each(node.childNodes, (item) => {
        searchInElements(item);
      });
    }
  }
  // initialize the function with document.body
  searchInElements(document.body);
  // return the result variable of arrays
  return resultArray;
}
