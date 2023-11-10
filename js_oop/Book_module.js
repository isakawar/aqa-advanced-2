class Book {
    constructor(title, author, year) {
        this._title = title;
        this._author = author;
        this._year = year;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        if (typeof value === 'string') {
            this._title = value;
        } else {
            console.log('Invalid input. Title must be a string.');
        }
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (typeof value === 'string') {
            this._author = value;
        } else {
            console.log('Invalid input. Author must be a string.');
        }
    }

    get year() {
        return this._year;
    }

    set year(value) {
        if (typeof value === 'number' && value > 0) {
            this._year = value;
        } else {
            console.log('Invalid input. Year must be a positive integer.');
        }
    }

    printInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
    }

    static findOldestBook(books) {
        return books.reduce((oldestBook, currentBook) => (currentBook.year < oldestBook.year ? currentBook : oldestBook), books[0]);
    }
}
export default Book;
