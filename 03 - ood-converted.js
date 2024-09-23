/**
 * Coverted code structure from procedure code to class based code.
 * Split code based on functionalities. For eg :- book, member, library
 * Observe how library encapsulates list of books and members.
 */
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

class Member {
    constructor(name) {
        this.name = name;
    }
}

class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(title) {
        this.books = this.books.filter(book => book.title !== title);
    }

    addMember(member) {
        this.members.push(member);
    }

    removeMember(name) {
        this.members = this.members.filter(member => member.name !== name);
    }

    borrowBook(memberName, bookTitle) {
        const bookIndex = this.books.findIndex(book => book.title === bookTitle);
        if (bookIndex !== -1) {
            const memberExists = this.members.some(member => member.name === memberName);
            if (memberExists) {
                this.books.splice(bookIndex, 1);
                console.log(`${memberName} borrowed ${bookTitle}`);
            } else {
                console.log(`Member ${memberName} not found`);
            }
        } else {
            console.log(`Book ${bookTitle} not available`);
        }
    }

    returnBook(book) {
        this.books.push(book);
        console.log(`Book ${book.title} returned`);
    }
}

// Example Usage
const library = new Library();
const book = new Book("1984", "George Orwell");
const member = new Member("Alice");

library.addBook(book);
library.addMember(member);
library.borrowBook("Alice", "1984");
library.returnBook(book);

/**
 *  Encapsulation
 *      - Before :- Books and members were managed globally with separate functions.
 *      - After :- Data and methods are encapsulated within the Library, Book, and Member classes.
 *  Abstraction
 *      - Before :- The implementation details were mixed with procedural logic.
 *      - After :- Book and Member classes abstract away the details of their respective attributes.
 *  Reusability
 *      - Before :- Functions were specific to their tasks and couldn’t be reused in other contexts easily.
 *      - After :- Classes can be reused or extended for other types of books or members.
 *  Maintainability
 *      - Before :- Changes to the system required updating multiple functions.
 *      - After :- Changes can be made within specific classes, making the system easier to maintain.
 *  Separation of Concerns:
 *      - Before :- There was no clear separation of responsibilities.
 *      - After :- Library manages the overall system, while Book and Member handle their own data.
 */