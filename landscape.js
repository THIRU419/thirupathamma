function isLandscape(width, height){

    return (width > height);
  }
  
  let checkWidthHeight1 = isLandscape(1000, 500);
  console.log('Landscape:',checkWidthHeight1);
  
  let checkWidthHeight2 = isLandscape(200, 900);
  console.log('Landscape:',checkWidthHeight2);
  
  let checkWidthHeight3 = isLandscape(3574, 278);
  console.log('Landscape:',checkWidthHeight3);