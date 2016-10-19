var difference = function(firstArr, secondArr) {
  return firstArr.filter((el) => {
    if(secondArr.indexOf(el) === -1 ){
      return el;
    }
  });  
};
var symmetricDiff = function(firstArr,secondArr) {
  return difference(firstArr,secondArr).concat(difference(secondArr, firstArr));
};