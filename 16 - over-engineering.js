class LibraryItem {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

class Book extends LibraryItem {}
class Magazine extends LibraryItem {}

class ItemRepository {
    // Overly complicated repository for handling library items
    addItem(item) { /* implementation */ }
    removeItem(item) { /* implementation */ }
    findItem(title) { /* implementation */ }
}

class Library {
    constructor(itemRepo) {
        this.itemRepo = itemRepo;
    }
}

/**
 * Issue: The introduction of a repository pattern for such a simple use case might be excessive. It complicates the design without providing enough value, leading to confusion.
 */