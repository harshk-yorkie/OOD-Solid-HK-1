/**
 * Add interface to libraries class and member class. 
 * In typescript you can use interface instead of class.
 */

// Base class for Library Items
class LibraryItem {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    getDetails() {
        return `${this.title} by ${this.author}`;
    }
}

// Derived classes for different item types
class Book extends LibraryItem {
    constructor(title, author) {
        super(title, author);
        this.type = 'book';
    }
}

class Magazine extends LibraryItem {
    constructor(title, author) {
        super(title, author);
        this.type = 'magazine';
    }
}

// Member class
class Member {
    constructor(name) {
        this.name = name;
    }
}

// Library class
class Library {
    constructor() {
        this.items = [];
        this.members = [];
        this.overdueItems = [];
    }

    addItem(item) {
        if (item instanceof LibraryItem) {
            this.items.push(item);
        } else {
            throw new Error('Invalid item type');
        }
    }

    removeItem(title) {
        this.items = this.items.filter(item => item.title !== title);
    }

    addMember(member) {
        this.members.push(member);
    }

    removeMember(name) {
        this.members = this.members.filter(member => member.name !== name);
    }

    borrowItem(memberName, itemTitle) {
        const itemIndex = this.items.findIndex(item => item.title === itemTitle);
        if (itemIndex !== -1) {
            const memberExists = this.members.some(member => member.name === memberName);
            if (memberExists) {
                const [item] = this.items.splice(itemIndex, 1);
                console.log(`${memberName} borrowed ${itemTitle}`);
                if (item instanceof Magazine) {
                    this.overdueItems.push({ title: itemTitle, dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) });
                }
            } else {
                console.log(`Member ${memberName} not found`);
            }
        } else {
            console.log(`Item ${itemTitle} not available`);
        }
    }

    returnItem(title) {
        const overdueIndex = this.overdueItems.findIndex(item => item.title === title);
        if (overdueIndex !== -1) {
            this.overdueItems.splice(overdueIndex, 1);
            console.log(`Item ${title} returned`);
        } else {
            console.log(`Item ${title} was not borrowed or is not overdue`);
        }
    }

    listOverdueItems() {
        console.log('Overdue Items:');
        this.overdueItems.forEach(item => {
            console.log(`Title: ${item.title}, Due Date: ${item.dueDate}`);
        });
    }
}

// Example Usage
const library = new Library();
const book = new Book("1984", "George Orwell");
const magazine = new Magazine("Tech Monthly", "Various");
const member = new Member("Alice");

library.addItem(book);
library.addItem(magazine);
library.addMember(member);
library.borrowItem("Alice", "1984");
library.borrowItem("Alice", "Tech Monthly");
library.listOverdueItems();
library.returnItem("Tech Monthly");

/**
 * Single Responsibility Principle (SRP)
 * SRP states that a class should have one, and only one, reason to change. Each class should focus on a single responsibility.
 * Implementation in the Code:
 *  - Separate Classes for Different Responsibilities:
 *      - LibraryItem: This class handles the basic properties and behavior of library items (like title and author). Its responsibility is to provide details about library items.
 *      - Book and Magazine: These subclasses extend LibraryItem and add specific behavior or attributes relevant to their type (e.g., type). Each of these classes has a distinct responsibility related to their respective item types.
 *      - Member: This class is solely responsible for handling member details, such as the member's name.
 *      - Library: This class manages the collection of items and members, handling operations like adding/removing items, borrowing, and returning items. Its responsibility is to manage the library’s overall operations.
 */

/**
 * Open/Closed Principle (OCP)
 * OCP states that software entities (classes, modules, functions, etc.) should be open for extension but closed for modification. 
 * This principle allows for new functionality to be added without changing existing code.
 * Implementation in the Code:
 *  - Extensibility through Inheritance:
 *      - The LibraryItem class is designed as a base class that can be extended by other classes (like Book and Magazine). 
 *      - If you wanted to add another type of library item (e.g., DVD), you can create a new class that extends LibraryItem without modifying the existing codebase.
 *  - Using the Base Class in Library:
 *      - The Library class can operate with any subclass of LibraryItem. 
 *      - This means it can handle new types of items as long as they adhere to the LibraryItem structure. 
 *      - For example, you could add a DVD or Journal class, and the Library class would continue to work without changes.
 *          - library.addItem(new DVD("Inception", "Christopher Nolan"));
 *  - Minimal Changes Required:
 *      - Existing functionality (like borrowing or listing items) does not need modification when new item types are added. 
 *      - This adheres to OCP because it allows you to extend the system's capabilities without changing its core logic.
 */

/**
 * Liskov Substitution Principle (LSP)
 * LSP states that objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program. 
 * Essentially, subclasses should enhance or extend the base class functionality without altering the expected behavior.
 * Application in the Code:
 *  - Substitution of Items: 
 *      - The Library class works with LibraryItem objects. 
 *      - Both Book and Magazine can be used interchangeably in contexts expecting a LibraryItem. 
 *      - For example, when calling methods that operate on LibraryItem (like addItem), it doesn’t matter whether it’s a Book or a Magazine—the method works as expected because both classes adhere to the contract defined by LibraryItem.
 *          - library.addItem(new Book("1984", "George Orwell"));
 *          - library.addItem(new Magazine("Tech Monthly", "Various"));
 *  - Behavior Consistency:
 *      - The behavior expected from any LibraryItem is consistent across subclasses. 
 *      - If a method relies on the getDetails() function of LibraryItem, it will work correctly with both Book and Magazine, as they both inherit this method.
 */

/**
 * Interface Segregation Principle (ISP)
 * ISP states that clients should not be forced to depend on interfaces they do not use. 
 * This means that instead of having a single, bulky interface, it’s better to have smaller, more specific interfaces that serve different client needs.
 * Application in the Code:
 *  - No Interfaces, but Clear Responsibilities: 
 *      - While the code does not explicitly implement interfaces (as it’s plain JavaScript), it naturally avoids forcing any class to implement unnecessary methods. 
 *      - Each class (LibraryItem, Book, Magazine, Member, and Library) has a clear and limited set of responsibilities.
 *  - Specialization of Items: 
 *      - By separating Book and Magazine as distinct subclasses of LibraryItem, the code adheres to the ISP concept. 
 *      - If we were to introduce a new item type (e.g., DVD), it would only need to implement the relevant behavior without affecting existing classes.
 */

/**
 * Dependency Inversion Principle (DIP)
 * DIP states that high-level modules should not depend on low-level modules; both should depend on abstractions. 
 * This principle encourages the design of systems that are decoupled and easier to maintain, test, and extend.
 * Application of DIP in the Code
 *  - High-Level Module: Library Class:
 *      - The Library class is a high-level module responsible for managing library items and members. 
 *      - It does not directly depend on the concrete classes Book and Magazine. Instead, it works with the abstract concept of LibraryItem.
 *  - Abstraction: LibraryItem:
 *      - The LibraryItem class serves as an abstraction that defines the common behavior for all library items. 
 *      - Both Book and Magazine extend this base class. 
 *      - The Library class interacts with instances of LibraryItem, which allows it to remain agnostic to the specific types of items being used.
 *      - Line 51 to 54 (check if condition) of addItem function, the Library class accepts any object that is a LibraryItem, thereby depending on an abstraction rather than specific implementations.
 *  - Low-Level Modules: Book and Magazine:
 *      - The Book and Magazine classes are considered low-level modules that implement the specifics of what a library item is. 
 *      - They depend on the LibraryItem abstraction but are not directly referenced by the Library class in a way that binds them together.
 *  - Decoupling:
 *      - This design allows the Library class to be extended or modified without changing how it interacts with specific item types. 
 *      - If you were to add a new item type, such as DVD, you would simply create a new class that extends LibraryItem without needing to modify the Library class itself.
 */