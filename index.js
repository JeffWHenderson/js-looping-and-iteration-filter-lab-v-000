// Code your solution in this file
function findMatching(drivers, string){
    return drivers.filter(function(i) {
      return i === string
    })
  //[1, 2, 3, 4, 5].filter(function (num) { return num > 3; });
}
