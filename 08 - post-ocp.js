class Shape {
    area() {
      throw new Error('Method not implemented');
    }
}
  
class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    area() {
      return Math.PI * this.radius * this.radius;
    }
}
  
class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
}
  
  // New shape can be added without modifying existing classes
class Triangle extends Shape {
    constructor(base, height) {
      super();
      this.base = base;
      this.height = height;
    }
  
    area() {
      return 0.5 * this.base * this.height;
    }
}
  
class AreaCalculator {
    calculateArea(shape) {
      return shape.area(); // Polymorphism in action
    }
}

// Usage
const calculator = new AreaCalculator();
console.log(calculator.calculateArea(new Circle(5))); // Area of circle
console.log(calculator.calculateArea(new Rectangle(4, 6))); // Area of rectangle
console.log(calculator.calculateArea(new Triangle(4, 3))); // Area of triangle
  