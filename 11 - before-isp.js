class Machine {
    print() {
      // Print functionality
    }
  
    scan() {
      // Scan functionality
    }
  
    fax() {
      // Fax functionality
    }
}
  
class MultiFunctionPrinter extends Machine {
    print() {
      console.log("Printing...");
    }
  
    scan() {
      console.log("Scanning...");
    }
  
    fax() {
      console.log("Faxing...");
    }
}
  
class SimplePrinter extends Machine {
    print() {
      console.log("Printing...");
    }
  
    scan() {
      throw new Error("This printer can't scan");
    }
  
    fax() {
      throw new Error("This printer can't fax");
    }
}
  