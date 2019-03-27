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
  array.unshift(element)
  return array;
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
