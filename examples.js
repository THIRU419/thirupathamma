

function getLargestNumber(arrayToSearch) {
    if (arrayToSearch.length <= 0) return 'Array is Empty! Nothing to search!!';
  
    return arrayToSearch.reduce((largetNumber, curentSearchElement) => {
      return (curentSearchElement > largetNumber) ? curentSearchElement : largetNumber;
    })
  }
  
  const versionArray = [53, 52, 63, 92, 7];
  const largestVersion = (getLargestNumber(versionArray));
  console.log('largestVersion: ', largestVersion);
  
  console.log('---------');
  
  const ageArray = [1, 5, 2, 5, 3, 5, 30];
  const maxAge = (getLargestNumber(ageArray));
  console.log('maxAge: ', maxAge);