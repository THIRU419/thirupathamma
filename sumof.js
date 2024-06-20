function sumOfArguments(...items){
    // rest operator converts anything passed as an array
    console.log('current items/values to add:', items);
    return items.reduce((n1, n2) => n1 +n2);
  }
  
  console.log('Sum:', sumOfArguments(20, 9, 6, 4, 8));
  // console.log('Sum:', sumOfArguments([20, 9, 6, 4, 8]));