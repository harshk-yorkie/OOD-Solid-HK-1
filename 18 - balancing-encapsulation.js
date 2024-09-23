class LibraryItem {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    getDetails() {
        return `${this.title} by ${this.author}`;
    }
}

class Book extends LibraryItem {
    // Overriding to add some behavior
    getDetails() {
        return `[Book] ${super.getDetails()}`;
    }
}

// Excessive encapsulation can cause performance issues
class Library {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    listItems() {
        return this.items.map(item => item.getDetails()).join('\n');
    }
}

/**
 * Issue: In scenarios where performance is critical, the overhead from method calls and object creation can accumulate, especially if these methods are invoked frequently.
 * no need of function getDetails in book class.
 */