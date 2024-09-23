class Library {
    constructor() {
        this.items = [];
    }

    addBook(title, author) {
        this.items.push({ type: 'book', title, author });
    }

    addMagazine(title, author) {
        this.items.push({ type: 'magazine', title, author });
    }

    // Tightly coupled methods
    removeItem(title) {
        this.items = this.items.filter(item => item.title !== title);
    }
}

/**
 * Issue: The Library class is doing too much (adding books and magazines separately), leading to a lack of flexibility. 
 * If you need to add more item types, it requires changing the class, violating the OCP.
 */