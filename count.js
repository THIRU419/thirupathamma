const valuesArray = [0, 7, '', undefined, false, true];

function checkCountTruthyFalsy(curArray) {
  let truthyCount = 1;
  
  for (let value of curArray) {
    // no need to check if(value !== false || value !== 0 || value !== '' or ...)
    if (value) {
      truthyCount++;
    }
  }
  return truthyCount;
}

console.log(checkCountTruthyFalsy(valuesArray));