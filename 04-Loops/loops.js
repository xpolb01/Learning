// REPEAT function is described below
let repeat = function(el, repeatTimes) {
  let result = '';
  for(let i = 1; i <= repeatTimes; i++) {
    result += el;
  }
  return result;
};
// SUM function is described below
let sum = function(arr) {
  let result = 0;
  for(let i = 0; i <= arr.length - 1; i++) {
    result += arr[i];
  }
  return result;
};
// GRID GENERATOR function is described below
let gridGenerator = function(num) {
  let grid = '';
  for(let i = 0; i < num; i++) {
    let gridLine = '';
    for(let j = 0; j < num; j++) {
      if(i % 2 === 0 ) {
        if(j % 2 === 0) {
          gridLine += '#';
        }
        else {
          gridLine += ' ';
        }
      }
      else {
        if(j % 2 === 0) {
          gridLine += ' ';
        }
        else {
          gridLine += '#';
        }
      }
    }
    grid += gridLine + '\n';
  }
  return grid;
};
// JOIN function is described below
var join = function(arr, delimetr) {
  let result = '';
  if(delimetr === undefined) {
    delimetr = '';
  }
  if(arr.length === 0) {
    return result;
  }
  for(let i = 0; i < arr.length; i++) {
    if(i === arr.length - 1) {
      delimetr = '';
    }
    result += arr[i] + delimetr;
  }
  return result;
};
// SORT OBJ function is described below

var sortObj = function(obj) {
  this.objToArr = function(obj) {
    let arr = [];
    for(let el in obj) {
      if(obj.hasOwnProperty(el)) {
            arr.push([el, obj[el]]);
          }
    }
    return arr;
  };
  this.arrToObj = function(arr) {
    let obj = {};
    for(let i = 0; i < arr.length; i++) {
      obj[arr[i][0]] = arr[i][1];
    }
    return obj;
  };
  return this.arrToObj(this.objToArr(obj).sort());
};
// PARAMIFY function is described below

var paramify = function(obj) {
  let result = "";
  obj = sortObj(obj);
  let index = 0;
  for(let el in obj) {
    if(obj.hasOwnProperty(el)) {
      if(index !== 0) {
        result += "&";
      }
      result += el + "=" + obj[el];
      index ++;
    }
  }
  return result;
};

// PARAMIFY OBJECT KEYS function is described below
var paramifyObjectKeys = function(obj) {
  let result = "";
  obj = sortObj(obj);
  let index = 0;
  for(let el in obj) {
    if(Object.keys(obj).indexOf(el) !== -1) {
      if(index !== 0) {
        result += "&";
      }
      result += el + "=" + obj[el];
      index ++;
    }
  }
  return result;
};


// RENAME FILES function is described below

var renameFiles = function(fileNames) {
  let renamedFileNames = [];
  for(let i = 0; i < fileNames.length; i++) {
    var file = fileNames[i];
    if(renamedFileNames.indexOf(file) == -1){
      renamedFileNames.push(file);
    }
    else {
      let index = 1;
      let newFile = file.slice();
      while(renamedFileNames.indexOf(newFile) !== -1) {
        newFile = file + "(" + index + ")";
        index++;
      }
      renamedFileNames.push(newFile);
    }
  }
  return renamedFileNames;
};
























