describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array', function(){
    expect( bubbleSort([5,4,6,7,2,4]) ).toEqual( [2,4,4,5,6,7] );
  });  

  it('handles an array filled with same numbers', function(){
    expect( bubbleSort([3,3,3,3,3]) ).toEqual( [3,3,3,3,3] );
  });

   it('handles an array with negative integers', function(){
    expect( bubbleSort([-2,-5,-3,5,6,0,2]) ).toEqual( [-5,-3,-2,0,2,5,6] );
  });

});

