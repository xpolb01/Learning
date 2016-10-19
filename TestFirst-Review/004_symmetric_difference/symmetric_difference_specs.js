describe('difference', function(){

  it('returns an array', function(){
    expect(difference([],[])).toEqual([]);
  });

  it('returns the unique index values from the first argument (array)', function(){
    expect(difference([1,2,3,4,5,6],[9,8,7,1,2,5,11])).toEqual([3,4,6])
  });

  it('returns the unique index for non-integer values', function(){
    expect(difference(['hello', 'world', 'bye'], ['full', 'stack', 'world','bye'])).toEqual(['hello']);
  });
  
  it('calls Array.prototype.filter', function(){
   spyOn(Array.prototype, 'filter').and.callThrough();
    expect(difference([1,2,3],[3,2,5])).toEqual([1]); 
    expect(Array.prototype.filter).toHaveBeenCalled();
  });

});

describe("symmetricDiff", function(){

  it('returns an array', function(){
    expect(symmetricDiff([],[])).toEqual([]);
  });

  it('returns the Symmetric Difference', function(){
    expect(symmetricDiff([1,2,3,4,5,6],[9,8,7,1,2,5,11])).toEqual([3,4,6,9,8,7,11]);
  });

  it('returns the Symmetric Difference for non-integer values', function(){
    expect(symmetricDiff(['hello', 'world', 'bye'], ['full', 'stack', 'world','bye'])).toEqual([ 'hello', 'full', 'stack' ]);
  });

  it('calls the difference function', function(){
    spyOn(window, 'difference').and.callThrough();
    expect(symmetricDiff(['a','b','c'], ['c','d','f'])).toEqual(['a','b','d','f']);
    expect(difference).toHaveBeenCalled();
  });

});
