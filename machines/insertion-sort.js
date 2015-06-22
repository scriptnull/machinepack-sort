module.exports = {


  friendlyName: 'Insertion Sort',


  description: 'Sort an array using Insertion sort algorithm. ',


  extendedDescription: 'Best case : O(n) , Worst case : O(n2)',


  inputs: {
    array : {
      example : [5,3,1,4,2] , 
      description : 'Array to be sorted.' ,
      required : true 
    } 
  },


  defaultExit: 'success',


  exits: {
  
    error: {
      description: 'Unexpected error occurred.',
      variableName: 'err'
    },
    
    success: {
      variableName : 'sortedArray' ,
      description : 'Result will contain the sorted array.' ,
      example : [1,2,3,4,5]
    }

  },


  fn: function (inputs,exits) {
    for(var i = 1 ; i < inputs.array.length ; i++){
      var value = inputs.array[i]; 
      var hole_position = i ;
      while( hole_position > 0 &&  inputs.array[hole_position - 1] > value ){
        inputs.array[hole_position] = inputs.array[hole_position - 1];
        hole_position--;
      }
      inputs.array[hole_position] = value ;      
    }
    return exits.success(inputs.array);
  }


};
