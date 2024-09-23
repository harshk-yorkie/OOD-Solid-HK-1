class Printer {
    print() {
      throw new Error("Method not implemented");
    }
}
  
class Scanner {
    scan() {
      throw new Error("Method not implemented");
    }
}
  
class FaxMachine {
    fax() {
      throw new Error("Method not implemented");
    }
}
  
class MultiFunctionPrinter extends Printer {
    print() {
      console.log("Printing...");
    }
}
  
class MultiFunctionScanner extends Scanner {
    scan() {
      console.log("Scanning...");
    }
}
  
class SimplePrinter extends Printer {
    print() {
      console.log("Printing...");
    }
}
  
// Usage
const printer = new MultiFunctionPrinter();
printer.print(); // Printing...

const simplePrinter = new SimplePrinter();
simplePrinter.print(); // Printing...
  