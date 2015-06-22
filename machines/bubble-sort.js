module.exports = {


  friendlyName: 'Bubble Sort',


  description: 'Sort an array using Bubble sort algorithm',


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
    },

    success: {
      variableName : 'sortedArray' ,
      description : 'Result will contain the sorted array.' ,
      example : [1,2,3,4,5]
    }

  },


  fn: function (inputs, exits) {
    
    for(var i = 0 ; i < inputs.array.length - 1 ; i++ ){
      for(var j = 0 ; j < inputs.array.length - i - 1; j++){
        if(inputs.array[j] > inputs.array[j+1]){
          var temp = inputs.array[j];
          inputs.array[j] = inputs.array[j + 1];
          inputs.array[j + 1] = temp ; 
        }
      }
    }
    
    return exits.success(inputs.array);
  }



};
