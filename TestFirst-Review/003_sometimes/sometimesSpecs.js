describe('sometimes', function(){
  var myFunc,
  add = function add(a,b){
      return a+b;
    }

  beforeEach(function(){
    
    spyOn(add, 'apply').and.callThrough();
    myFunc = sometimes(add); 

  });

  it("should return a function object", function(){
    expect(typeof myFunc === "function").toEqual(true)
  });

  it("should return the add functions expected output the first 3 times the function is invoked", function(){
    var outputArr = [];

    for(var i = 0; i < 3; i++){
      outputArr.push(myFunc(2+i,3+i))
    }
    expect(outputArr).toEqual([5,7,9]); 
  });

  it("should return a default message 'I do not know!' on the 4th time the function is invoked ", function(){
    var outputArr = [];

    for(var i = 0; i < 4; i++){
      outputArr.push(myFunc(3+i,4+i))
    }
    expect(outputArr).toEqual([7,9,11, 'I do not know!']);
  });

  it("each consecutive odd call returns add's expected output", function(){
    var outputArr = [],
        iDoNotk = 'I do not know!'

    for(var i = 0; i < 8; i++){
      outputArr.push(myFunc(3+i,4+i))
    }
    expect(outputArr).toEqual([7,9,11, iDoNotk,15, iDoNotk, 19, iDoNotk]);
  });

  it("each consecutive even call returns 'I do not know'", function(){
    var outputArr = [],
        iDoNotk = 'I do not know!'

    for(var i = 0; i < 9; i++){
      outputArr.push(myFunc(3+i,4+i))
    }
    expect(outputArr).toEqual([7,9,11, iDoNotk,15, iDoNotk, 19, iDoNotk, 23]);
  });

  it("uses '.apply' on the add function and passes it the 'arguments' object ", function(){

    myFunc(5,6);
    expect(add.apply).toHaveBeenCalled();
  });



});