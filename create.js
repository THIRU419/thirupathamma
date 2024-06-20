function generateArrayFromRange(startNum, endNum) {
    const rangeArray = [];
    for(let curNum = startNum; curNum <= endNum; curNum++) {
      // console.log('curNum: ', curNum);
      rangeArray.push(curNum);
      // console.log('rangeArray: ', rangeArray);
    }
    return rangeArray;
  }
  
  const range1 = generateArrayFromRange(2, 20);
  console.log(range1);
  console.log('----------');
  const range2 = generateArrayFromRange(-1, 90);
  console.log(range2);