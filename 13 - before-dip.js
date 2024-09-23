class Database {
    connect() {
      console.log("Connecting to MySQL database...");
    }
}
  
class UserService {
    constructor() {
      this.database = new Database(); // Direct dependency on Database
    }
  
    createUser(username) {
      this.database.connect();
      console.log(`User ${username} created.`);
    }
}
  
// Usage
const userService = new UserService();
userService.createUser("Alice");
  