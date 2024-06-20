// Factory function/method - camelCasing - camel notation - use return keyword
function createObjFactoryMethod(name, age, rank, country) {
    return {
      name, age, rank, country
    }
  }
  
  let Students1 = createObjFactoryMethod('thiru', 25,7, 'uk');
  console.log('Students1', Students1);
  
  // Constructor function/method - pascalCasing - pascal notation - use this keyword
  function Student(name, age, rank, country) {
    this.name = name;
    this.age = age;
    this.rank = rank;
    this.country = country;
  }
  
  let Students2 = new Student('nani', 20, 2, 'Hyd');
  console.log('Students2', Students2);