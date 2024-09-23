class AreaCalculator {
    calculateArea(shape) {
        if (shape.type === 'circle') {
            return Math.PI * shape.radius * shape.radius;
        } else if (shape.type === 'rectangle') {
            return shape.width * shape.height;
        }
        // Adding a new shape requires modifying this method
        throw new Error('Unknown shape');
    }
  }
  
// Usage
const calculator = new AreaCalculator();
console.log(calculator.calculateArea({ type: 'circle', radius: 5 })); // Area of circle
console.log(calculator.calculateArea({ type: 'rectangle', width: 4, height: 6 })); // Area of rectangle
  