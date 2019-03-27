var chocolateBars = [
  "snickers",
  "hundred grand",
  "kikat",
  "skittles"
];

function addElementToBeginningOfArray (array, element){
  var novoArray = [...array]
  novoArray.unshift(element)
  return novoArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element);
}

function addElementToEndOfArray (array, element){
  var novoArray = [...array]
  novoArray.push(element)
  return novoArray;
}
function destructivelyAddElementToEndOfArray (array, element){
  array.push(element)
  return array;
}
