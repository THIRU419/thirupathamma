function findMaxNumber(num1, num2){
    
    return (num1 > num2) ? num1 : num2;
  }
  
  let checkMax1 = findMaxNumber(45, 60);
  console.log('Max Number:',checkMax1);
  
  let checkMax2 = findMaxNumber(38, 68);
  console.log('Max Number:',checkMax2);
  
  let checkMax3 = findMaxNumber(60, 60);
  console.log('Max Number:',checkMax3);