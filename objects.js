//1. Create a User object that contains properties for name, age, and email. Include methods to greet (returns a greeting message) and updateEmail.
// const user = {};
//  user.name = "Elon Musk";
//  user.age = 53;
//  user.email = "elon.musk@spacex.com"; 
//  user.greet = function(){
//     return "Hello, my name is  " + this.name + "!";
//  };
// user.updateEmail = 
//          function(newEmail){
//                return  this.email = newEmail;
//         };
// console.log(user);

//2.Create an array of workers objects with properties for name and age. Write a function that takes an age as a parameter and returns an array of users older than that age.
// const workers = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 22 },
//     { name: "Max", age: 47 }
//   ];
  
//   function filterUsersByAge(minAge) {
//     return workers.filter(worker => worker.age > minAge);
//   }
//    const olderUsers = filterUsersByAge(24);
//    console.log(olderUsers);

// 3. Modify the book objects to include a pagesRead property. Write a function that calculates and returns the total number of pages read from all books.
//   const collection = [
//     { title: "The Great Gatsby", pages: 180, pagesRead: 100 },
//     { title: "1984", pages: 328, pagesRead: 50 },
//     { title: "To Kill a Mockingbird", pages: 281, pagesRead: 281 }
//   ];
//   const books = [];
//   collection.forEach(book => {
//       books.push({pagesRead: book.pagesRead});
//   });
//   function countTotalPagesRead(){
//     return books.reduce((total, book) => total + book.pagesRead, 0);
//   };  
//   const totalRead = countTotalPagesRead();
//   console.log(totalRead);

// 4. Create an array of book objects, where each book has properties such as title, author, pages, and isRead. 
//    Write a function to add a new book and a function to list all books with their read status.

// const library = [];
// function addBook(title, author, pages, isRead) {
//     library.push({ title, author, pages, isRead });
//        return library;
//     };
// addBook("The Great Gatsby", "F. Scott Fitzgerald", 180,'true');
// addBook("1984", "George Orwell", 328, 'false');

// function addNewBook(title, author, pages, isRead){
//     library.push(title, author, pages, isRead);
//     return library;
// };
// console.log(library);

// function listBooks(){
//     return library.map(book => 
//         `Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}, Read: ${book.isRead}`).join('\n');
// };
//   console.log(listBooks());

// addBook("The Great Gatsby", "F. Scott Fitzgerald", 180);
// addBook("1984", "George Orwell", 328);
// listBooks(); // Title: example, Author: example, Pages: example, Read: true/false || yes/no


// 5. Extra: Grouping Library Functions into One Object
//  const librarySystem = {
//     books: [],
//     addBook(book){},
//     listBooks(){},
//     addNewBook(book){},
//     getBookById(bookId){},
//     updateBook(bookId, book){},
//     deleteBook(bookId){},
//     getBooksByAvailableStatus(status){}
// };
// librarySystem.books = [];
 
// librarySystem.addBook = function(title, author, year, genre, pages, isRead, isAvailable) {
//    // let id = Math.random().toString(16).slice(2);
//     const book = {
//         //key: id,
//         title,
//         author,
//         year,
//         genre,
//         pages,
//         isRead, 
//         isAvailable 
//         };
//         librarySystem.books.push(book);
//         return librarySystem.books;
//     };
//     console.log(librarySystem.addBook("The Great Gatsby","F. Scott Fitzgerald", 1925, 'novel', 180, true, true));
    

//     librarySystem.listBooks = function() {
//         return librarySystem.books.map(book => 
//             `Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}, Read: ${book.isRead}`).join('\n');
//     };
//      console.log(librarySystem.listBooks());
     
//     librarySystem.addNewBook = function(...params){
//         const newBook = {
//            // key: Math.random().toString(16).slice(2),
//             title:params[0],
//             author:params[1],
//             year:params[2],
//             genre:params[3],
//             pages:params[4],
//             isRead:params[5],
//             isAvailable:params[6]
//         }
//         librarySystem.books.push(newBook);
//         return newBook;
         
//     }
//     console.log(librarySystem.addNewBook("The Great Gatsby","F. Scott Fitzgerald", 1925, 'novel', 180, true, true));
//     console.log(librarySystem.addNewBook("1984", "George Orwell", 1949, 'novel' , 328, false, true));

//     librarySystem.getBookById = function(bookId){
//         //return librarySystem.books.find(book => book.key === bookId);// Քանի որ Math.random()-ը անընդհատ նոր id էր գեներացնում, որոշեցի գտնել ինդեքսով։
//         for(let book of librarySystem.books){ 
//             if(librarySystem.books.indexOf(book)!== -1) return librarySystem.books[bookId];
//         };
//     };
//     console.log(librarySystem.getBookById(0));
    
//     librarySystem.updateBook = function(bookId, book){
//         librarySystem.books[bookId] = book;
//         return librarySystem.books[bookId];
//     }
//     console.log(librarySystem.updateBook(0, {title: "1984", author: "George Orwell",year: 1949, genre:'novel',pages: 328,isRead:false, isAvailable:true})); 
   
//     librarySystem.deleteBook = function(bookId){
//        if(bookId < librarySystem.books.length  && librarySystem.books.includes(librarySystem.books[bookId])){ 
//         librarySystem.books.splice(bookId, 1);
//         return true;
//         }else return false;
//     }
//     console.log(librarySystem.deleteBook(0));
    
//     getBooksByAvailableStatus = function(status){
//         return librarySystem.books.filter(books => books.isAvailable === status);
//     }
//     console.log(getBooksByAvailableStatus(true));



// Example usage:
// librarySystem.books // book[]
// librarySystem.listBooks(); :print in console: 'Title: string, Author: string, Pages: number, Read: true/false || yes/no'
// librarySystem.addNewBook(book); // :newBook
// librarySystem.getBookById(bookId); // :book | undefined
// librarySystem.updateBook(bookId, book); // :book
// librarySystem.deleteBook(bookId); // :true/false
// librarySystem.getBooksByAvailableStatus(status); // :book[] returns all available or unavailable books according to the filter

// Book Entity (shape of a book)
// book {
//   title: string;
//   author: string;
//   year: number;
//   genre: string;
//   isAvailable: boolean;
// }