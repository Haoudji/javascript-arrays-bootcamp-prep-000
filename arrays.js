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
  var entrepreneur = [array]
  return entrepreneur[index]
  }
  function destructivelyRemoveElementFromBeginningOfArray(array){
    var days = [array]
      days.shift()
      return days
  }
  function removeElementFromBeginningOfArray(array){
    var cats = [array]
      cats.slice(1)
      return cats
  }
  function destructivelyRemoveElementFromEndOfArray(array){
    var iceCreams = [array]
    iceCreams.pop()
    return iceCreams
  }
  function removeElementFromEndOfArray(array){
    var cream = [array]
    cream.slice(0, cream.length - 1)
    return cream
  }
  