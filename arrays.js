var chocolateBars = ['snikers','hundred grand','kitkat','skittles'];
function addElementToBeginningOfArray(array,element){
   array = [element,...array]
   return array
}
function destructivelyAddElementToBeginningOfArray(array,element){
     array.unshift(element)
    return array
}
 function addElementToEndOfArray(array, element){
    var cities = [...array, element]
   return cities
}
function destructivelyAddElementToEndOfArray(array,element){
      array.push(element)
    return array
}
function accessElementInArray(array, index){
  return array[index]
  }
  function destructivelyRemoveElementFromBeginningOfArray(array){
      array.shift()
      return array
  }
  function removeElementFromBeginningOfArray(array){
      array.slice(1)
      return array
  }
  function destructivelyRemoveElementFromEndOfArray(array){
    var iceCreams = [array]
    iceCreams.pop()
    return iceCreams
  }
  function removeElementFromEndOfArray(array){
    array.slice(1, cream.length - 1)
    return array
  }
  