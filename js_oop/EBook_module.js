import Book from "./Book_module.js";

class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this._fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        if (typeof value === 'string') {
            this._fileFormat = value;
        } else {
            console.log('Invalid input. File format must be a string.');
        }
    }

    printInfo() {
        super.printInfo();
        console.log(`File Format: ${this.fileFormat}`);
    }

    static createEBookFromBook(book, fileFormat) {
        return new EBook(book.title, book.author, book.year, fileFormat);
    }
}

export default EBook;
