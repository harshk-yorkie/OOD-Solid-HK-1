class Report {
    constructor(data) {
      this.data = data;
    }
  
    generateReport() {
      // Code to generate the report
      return `Report: ${this.data}`;
    }
}
  
class ReportPrinter {
    print(report) {
        // Code to print the report
        console.log(report.generateReport());
    }
}

class ReportSaver {
    saveToFile(report, filename) {
        // Code to save the report to a file
        const fs = require('fs');
        fs.writeFileSync(filename, report.generateReport());
    }
}
  
// Usage
const report = new Report("Sales Data");
const printer = new ReportPrinter();
const saver = new ReportSaver();

printer.print(report); // Print the report
saver.saveToFile(report, 'report.txt'); // Save the report to a file
  