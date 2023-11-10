import Book from './Book_module.js';
import EBook from "./EBook_module.js";

const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 1960);

console.log('Books:');
book1.printInfo();
book2.printInfo();

const ebook = new EBook('1984', 'George Orwell', 1949, 'PDF');

console.log('\nEBook:');
ebook.printInfo();

const oldestBook = Book.findOldestBook([book1, book2, ebook]);
console.log(`\nOldest Book: ${oldestBook.title}, Year: ${oldestBook.year}`);
