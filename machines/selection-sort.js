module.exports = {


  friendlyName: 'Selection Sort',


  description: 'Sort an array with Selection sort algorithm ',


  extendedDescription: 'Time complexity is O(n2)',


  inputs: {
    array: {
      example: [5, 3, 1, 4, 2],
      description: 'Array to be sorted.',
      required: true
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


  fn: function (inputs, exits) {
    
    for(var i = 0 ; i <= inputs.array.length - 2  ; i++){
      var minimumIndexValue = i ;
      for(var j = i + 1 ; j <= inputs.array.length - 1 ; j++ ){
        if(inputs.array[j] < inputs.array[i])
          minimumIndexValue = j ;
      }   
      var temp = inputs.array[i];
      inputs.array[i] = inputs.array[minimumIndexValue];
      inputs.array[minimumIndexValue] = temp;  
    }
    
    return exits.success(inputs.array);
  },



};
