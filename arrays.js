var chocolateBars = [
  "snickers",
  "hundred grand",
  "kikat",
  "skittles"
];

function addElementToBeginningOfArray (array, element){
  /*
  var novoArray = [...array]
  novoArray.unshift(element)
  return novoArray;
  */
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array;
}

function addElementToEndOfArray (array, element){
  /*
  var novoArray = [...array]
  novoArray.push(element)
  return novoArray;
  */
  return [...array, element]
}
function destructivelyAddElementToEndOfArray (array, element){
  array.push(element)
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array;
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1);

}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}
