const CIRCLE = {
    name: 'Circle',
    lineColor: 'pink',
    bgColor: 'green',
    radius: 2,
    get area() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  console.log('CIRCLE.area:', CIRCLE.area);