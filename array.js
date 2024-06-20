function includes(arrayToSearch, elementToSearch) {
    console.log('arrayToSearch: ', arrayToSearch);
    console.log('elementToSearch: ', elementToSearch);
    for(let curElement of arrayToSearch) {
      if(curElement === elementToSearch) {
        return true;
      } 
    }
    return false;
  }
  
  const versionArray = [11, 62, 85, 47,82];
  console.log(includes(versionArray, 2));
  console.log('---------');
  const ageArray = [1, 22, 5, 27, 5];
  console.log(includes(ageArray, 40));