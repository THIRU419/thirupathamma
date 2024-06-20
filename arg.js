function sumOfArguments(...items){
    // as rest operator converts anything passed as an array check following
    if(items.length === 2 && Array.isArray(items[2])) {
      // reset item as a new array 
      items = [...items[0]]
      console.log('current items/values to add:', items);
      return items.reduce((n1, n2) => n1 +n2);
    }
  }
  
  // pass arguments as an array
  // console.log('Sum:', sumOfArguments([5, 15, 3, 4, 9]));
  console.log('Sum:', sumOfArguments([5, 15, 3, 4, 9]));