class Bird {
    fly() {
      return "Flying";
    }
}
  
class Sparrow extends Bird {
    // Sparrow can fly
}
  
class Ostrich extends Bird {
    fly() {
      throw new Error("Ostriches can't fly");
    }
}
  
function letBirdFly(bird) {
    return bird.fly();
}
  
// Usage
const sparrow = new Sparrow();
console.log(letBirdFly(sparrow)); // Works fine

const ostrich = new Ostrich();
console.log(letBirdFly(ostrich)); // Throws an error
  