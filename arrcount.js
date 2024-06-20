 
function countSearchOccurances(arrayToSearch, elementsToSearch) {

    return arrayToSearch.reduce((countAccumulator, curentSearchElement) => {
      let countOccurances = (curentSearchElement === elementsToSearch) ? 1 : 0;
      // console.log('countAccumulator', countAccumulator, 'arrayToSearch', arrayToSearch, 'elementsToSearch', elementsToSearch,);
      return countAccumulator + countOccurances;
    },0)
  }
  
  const versionArray = [11, 2, 5, 47, 2];
  const versionCount = (countSearchOccurances(versionArray, 2));
  console.log('versionCount: ', versionCount);
  
  console.log('---------');
  
  const ageArray = [1, 5, 22, 5, 30, 5, 30];
  const ageCount = (countSearchOccurances(ageArray, -25));
  console.log('ageCount: ', ageCount);