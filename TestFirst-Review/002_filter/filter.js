var filter = function (arr, func) {
  var newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(func(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}