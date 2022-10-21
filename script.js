let myLibrary = [
    {title:"Harry Potter & the Philosopher Stone",author:"JK Rowling",
     year:2000,read:true
    },
    {title:"Notre dame de Paris",author:"Victor Hugo",
     year:1831,read:true
    },
    {title:"Le rouge et le noir",author:"Stendhal",
     year:1830,read:false
    }
];
function Book(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
    this.read = false
}
const container = document.querySelector('.booksDisplayer')
container.innerHTML = displayBooks(myLibrary);

function displayBooks(myLibrary) {
   return myLibrary.map(book => `
  <div class="book">
  <div class="bookTitle">${book.title}</div>
    <div class="description">
      <div class="bookAuthor">${book.author}</div>
      <div class="bookYear">${book.year}</div>
    </div> 
  </div>`).join('');
}
function addBookToLibrary() {
    let title = prompt("Title : ")
    let author = prompt("Author : ")
    let year = prompt("Year : ")
    let new_book = new Book(title, author, year)
    myLibrary.push(new_book)
  container.innerHTML = displayBooks(myLibrary);
}

