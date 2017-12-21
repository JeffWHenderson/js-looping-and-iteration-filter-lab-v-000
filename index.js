function findMatching(drivers, string){
    return drivers.filter(function(i) {
      return i.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(drivers, string) {
  //[1, 2, 3, 4, 5].filter(function (num) { return num > 3; })
  return drivers.filter(function(i){
    return i.slice(0, 2) === string
  })
}
