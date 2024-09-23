class Report {
    constructor(data) {
      this.data = data;
    }
  
    generateReport() {
      // Code to generate the report
      return `Report: ${this.data}`;
    }
  
    printReport() {
      // Code to print the report
      console.log(this.generateReport());
    }
  
    saveToFile(filename) {
      // Code to save the report to a file
      const fs = require('fs');
      fs.writeFileSync(filename, this.generateReport());
    }
}

/**
 * Report first needs to generated, will print generated report, and then save to file.
 */