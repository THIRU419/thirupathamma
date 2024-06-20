const Students = {
    name: 'mani',
    age: 55,
    rank: 3,
    country: 'India',
  }
  
  const Address = {
    street: 'sr Road',
    city: 'guntur',
    pinCode: 401209,
    state: 'ap',
    country: 'India',
  }
  
  function showObjectDetails(obj) {
    for(let key in obj) {
      console.log(key,' : ',obj[key]);
    }
  }
  
  showObjectDetails(Students);
  console.log('----------');
  showObjectDetails(Address);