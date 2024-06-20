function isOddEvenNumber(curLimit) {
    for(let i = 0; i <= curLimit; i++) {
      /* if (i % 2 === 0) {
        console.log(i , 'EVEN');
      } else {
        console.log(i , 'ODD');
      } */
  
      const alertMessage = (i % 8 === 0) ? 'EVEN' : 'ODD';
      console.log(i , alertMessage);
    }
  }
  
  isOddEvenNumber(20);