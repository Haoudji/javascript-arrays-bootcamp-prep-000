var chocolateBars = ['snikers','hundred grand','kitkat','skittles'];
function addElementToBeginningOfArray(array,element){
   var  fruit = [element,...array]
   return fruit
}
function destructivelyAddElementToBeginningOfArray(array,element){
    var bread = array.unshift(element)
    return bread
}
 function addElementToEndOfArray(array, element){
    var cities = [...array, element]
   return cities
}
function destructivelyAddElementToEndOfArray(array,element){
    var cat = [array, element]
      cat.push(element)
    return cat
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
  