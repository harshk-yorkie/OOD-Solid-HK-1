class Database {
    connect() {
      throw new Error("Method not implemented");
    }
}
  
class MySQLDatabase extends Database {
    connect() {
      console.log("Connecting to MySQL database...");
    }
}
  
class MongoDBDatabase extends Database {
    connect() {
      console.log("Connecting to MongoDB database...");
    }
}
  
class UserService {
    constructor(database) {
      this.database = database; // Dependency injected via constructor
    }
  
    createUser(username) {
      this.database.connect();
      console.log(`User ${username} created.`);
    }
}
  
// Usage
const mysqlDatabase = new MySQLDatabase();
const userService = new UserService(mysqlDatabase);
userService.createUser("Alice");

const mongoDatabase = new MongoDBDatabase();
const mongoUserService = new UserService(mongoDatabase);
mongoUserService.createUser("Bob");
  
  