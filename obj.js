function showStringProperties(curObj) {
    for(let key in curObj) {
      // console.log('key/prop:', key);
      if(typeof(curObj[key]) === 'string') {
        console.log(key,':', curObj[key]);
      }
    }
  }
  
  const Person = {
    name: 'mani',
    age: 60,
    height: 4.9,
    country: 'uk',
    designation: 'Ui Developer'
  }
  
  showStringProperties(Person);
  console.log('----------');
  
  const Technology = {
    name: 'ui/ux',
    version: 3,
    purpose: 'Scripting language for Web',
    developer: 'Netscape Corporation'
  }
  
  showStringProperties(Technology);
  console.log('----------');