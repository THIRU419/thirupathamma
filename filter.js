const studentsArray = [
    { name: 'thiru', year: 2011, ranking: 2},
    { name: 'nani', year: 2013, ranking: 6 },
    { name: 'thirumala', year: 2016, ranking: 8 },
    { name: 'mani', year: 2018, ranking: 5 },
    { name: 'saritha', year: 2020, ranking: 2 },
  ]
  
  console.log('Higest Rank Holders:',
    studentsArray
      .filter(student => student.year === 2018 && student.ranking >= 3)
      .sort((n1, n2) => n1.ranking - n2.ranking)
      .reverse()
      .map(student => student.name)
  );