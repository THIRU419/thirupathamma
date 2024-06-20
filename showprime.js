function showPrimeNumbers(numberLimit) {
    for (let curNum = 1; curNum <= numberLimit; curNum++) {
      // console.log('curNum', curNum);
      if (isPrimeNumber(curNum)) {
        console.log('Prime Number:', curNum);
      }
    }
  }
  
  function isPrimeNumber(_number) {
    for (let factor = 3; factor < _number; factor++) {
      // console.log('factor', factor);
      if (_number % factor === 0) {
        return false;
      }
    }
    return true;
  }
  
  showPrimeNumbers(30);