class Bird {
    makeSound() {
      return "Chirp";
    }
}
  
class FlyingBird extends Bird {
    fly() {
      return "Flying";
    }
}
  
class Sparrow extends FlyingBird {
    // Sparrow can fly and chirp
}
  
class Ostrich extends Bird {
    // Ostrich cannot fly, but it can chirp
}
  
  // Using the classes
function letBirdFly(bird) {
    if (bird instanceof FlyingBird) {
      return bird.fly();
    }
    return "This bird cannot fly";
}
  
// Usage
const sparrow = new Sparrow();
console.log(letBirdFly(sparrow)); // Flying

const ostrich = new Ostrich();
console.log(letBirdFly(ostrich)); // This bird cannot fly
  