function sumOfMultiples(curLimit) {

    let sumOfMultipleValue = 0;
  
    for(let i = 0; i <= curLimit; i++) {
      if (i % 4 === 0 || i % 9 === 0) {
        // console.log(i);
        sumOfMultipleValue +=i;
      }
    }
    // return sumOfMultipleValue;
    console.log(`sumOfMultipleValue of 4 & 9 upto ${curLimit} digit is:`, sumOfMultipleValue);
  }
  
  sumOfMultiples(10);