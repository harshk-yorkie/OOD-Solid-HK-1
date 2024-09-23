/**
 * Converted to common functions for eg from addBooks to addItems. 
 * Items can be magazine, books etc a library has
 * Add new functionality of backlog books
 */

let books = [];
let members = [];
let overdueBooks = [];

// Define functions for handling general items like books, magazines etc
function addItem(type, title, author) {
    if (type === 'book') {
        books.push({ title, author });
    } else if (type === 'magazine') {
        // Extend with magazines
        books.push({ title, author, type: 'magazine' });
    }
}

function removeItem(title) {
    books = books.filter(item => item.title !== title);
}

function addMember(name) {
    members.push({ name });
}

function removeMember(name) {
    members = members.filter(member => member.name !== name);
}

function borrowItem(memberName, itemTitle) {
    const itemIndex = books.findIndex(item => item.title === itemTitle);
    if (itemIndex !== -1) {
        const memberExists = members.some(member => member.name === memberName);
        if (memberExists) {
            const [item] = books.splice(itemIndex, 1);
            console.log(`${memberName} borrowed ${itemTitle}`);
            if (item.type === 'magazine') {
                overdueBooks.push({ title: itemTitle, dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) });
            }
        } else {
            console.log(`Member ${memberName} not found`);
        }
    } else {
        console.log(`Item ${itemTitle} not available`);
    }
}

function returnItem(title) {
    const itemIndex = overdueBooks.findIndex(item => item.title === title);
    if (itemIndex !== -1) {
        overdueBooks.splice(itemIndex, 1);
        console.log(`Item ${title} returned`);
    } else {
        console.log(`Item ${title} was not borrowed or is not overdue`);
    }
}

// Example Usage
addItem('book', "1984", "George Orwell");
addItem('magazine', "Tech Monthly", "Various");
addMember("Alice");
borrowItem("Alice", "1984");
borrowItem("Alice", "Tech Monthly");
returnItem("Tech Monthly");
