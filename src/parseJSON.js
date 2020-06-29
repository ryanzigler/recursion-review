// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  // wrap object function
    // closure function???
    // this one would contain the comma and colon character cases
    // calls wrap string function
    // this function recurs parseJSON
    // returns the object that is built
  // wrap array function
    // closure function ???
    // this one would contain the comma case
    // this function recurs parseJSON
    // returns the actual array that is built
  // wrap string function ***
    // this one contains the ' " cases


  // check the current character and see if its {}[],:' "
    // send to the appropriate helper function
  /*
  object
    {}
    { members }
    // Object.fromEntries()
  members
      pair
      pair , members
  pair
      string : value
  array
      []
      [ elements ]
  elements
      value
      value , elements
  value
      string
      number
      object
      array
      true
      false
      null
  */

  // next character function -
    // keeps track of place in string
    // removes whitespace


};
