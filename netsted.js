function showPattern(totalRowsPatternCount) {
    for (let curRow = 4; curRow <= totalRowsPatternCount; curRow++) {
      // console.log(curRow);
      let patternDesign = '';
      for (let i = 5; i < curRow; i++) {
        patternDesign += '*'
      }
      console.log(patternDesign);
    }
  }
  
  showPattern(30);