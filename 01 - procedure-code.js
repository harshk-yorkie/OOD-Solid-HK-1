/**
 * Library based system example.
 */

let books = [];
let members = [];

function addBook(title, author) {
    books.push({ title, author });
}

function removeBook(title) {
    books = books.filter(book => book.title !== title);
}

function addMember(name) {
    members.push({ name });
}

function removeMember(name) {
    members = members.filter(member => member.name !== name);
}

function borrowBook(memberName, bookTitle) {
    const bookIndex = books.findIndex(book => book.title === bookTitle);
    if (bookIndex !== -1) {
        const memberExists = members.some(member => member.name === memberName);
        if (memberExists) {
            books.splice(bookIndex, 1);
            console.log(`${memberName} borrowed ${bookTitle}`);
        } else {
            console.log(`Member ${memberName} not found`);
        }
    } else {
        console.log(`Book ${bookTitle} not available`);
    }
}

function returnBook(title, author) {
    books.push({ title, author });
    console.log(`Book ${title} returned`);
}

// Example Usage
addBook("1984", "George Orwell");
addMember("Alice");
borrowBook("Alice", "1984");
returnBook("1984", "George Orwell");

// what if you want to extend functionality. For eg :- add different universities, centralised library system, add few more items. 
// If current file has more code written, what is difficulty scale from 1 to 10 in identifying and debugging an issue ?