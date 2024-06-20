const MARKSARRAY = [25, 85, 35, 95];

function calculateAverage(currentArray) {
  let total = 0;
  for (let curValue of currentArray) {
    total += curValue;
  }
  // console.log('total:', total);
  return (total/currentArray.length);
}

// console.log(calculateAverage(MARKSARRAY));

function calculateGrades(_currentArray) { 
  const average = calculateAverage(_currentArray);
  // console.log('average:', average);

  if(average < 30) return grade = 'D'; 
  if(average < 50) return grade = 'C';
  if(average < 70) return grade = 'B';
  if(average <= 100) return grade = 'A';
}

console.log('Grade:',calculateGrades(MARKSARRAY));