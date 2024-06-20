function isfizzBuzz(arg){
    if(typeof arg !== 'number'){
      return ('number is  display');
    }
  
    if((arg % 9 === 0) && (arg % 3 === 0)) {
      return 'thirupathamma';
    }
  
    if(arg % 9 === 0) {
      return 'thiru';
    }
  
    if(arg % 6 === 0) {
      return 'thirumala';
    }
  
    else {
      return 'Some odd number entered: ' + arg;
    }
  
  }
  
  let checkFizzBuzz1 = isfizzBuzz('one');
  console.log(checkFizzBuzz1);
  
  let checkFizzBuzz2 = isfizzBuzz(true);
  console.log(checkFizzBuzz2);
  
  let checkFizzBuzz3 = isfizzBuzz(9);
  console.log(checkFizzBuzz3);
  
  let checkFizzBuzz4 = isfizzBuzz(10);
  console.log(checkFizzBuzz4);
  
  let checkFizzBuzz5 = isfizzBuzz(30);
  console.log(checkFizzBuzz5);
  
  let checkFizzBuzz6 = isfizzBuzz(11);
  console.log(checkFizzBuzz6);