class LibraryItem {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

class Book extends LibraryItem {
    getDetails() {
        return `${this.title} by ${this.author}`;
    }
}

class Magazine extends LibraryItem {
    getDetails() {
        return `${this.title} by ${this.author}`;
    }
}

class Library {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        if (!(item instanceof LibraryItem)) {
            throw new Error('Invalid item type');
        }
        this.items.push(item);
    }
}

// Poor abstraction level leads to repeated logic
class UserInterface {
    constructor(library) {
        this.library = library;
    }

    displayItemDetails(item) {
        // If we need to support multiple types, this method needs to change
        if (item instanceof Book) {
            console.log(item.getDetails());
        } else if (item instanceof Magazine) {
            console.log(item.getDetails());
        } else {
            console.log('Item not supported');
        }
    }
}

/**
 * Issue: The UserInterface class directly checks the type of the item, which couples the UI logic to specific implementations. 
 * Adding new item types would require changes in multiple places, violating OCP and SRP.
 */