/* CONST DEFINITIONS*/
const container = document.querySelector('.booksDisplayer')
const bookForm = document.getElementById('btn');
const data = new FormData()
bookTitle = document.getElementById("book_title")
bookAuthor = document.getElementById("book_author")
bookYear = document.getElementById("book_year")
const bookAdded = document.getElementById('submit');
/* 👇BOOKS ARRAY*/
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
/* 👇BOOK CONSTRUCTOR */
function Book(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
    this.read = false
}
/* 👇DISPLAY THE BOOKS */
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
/* 👇DISPLAY THE NEW BOOK FORM */
function displayed() {
  const form = document.getElementById('form');
  form.style.display = 'block';
}
bookForm.addEventListener('click', displayed)
/* 👇DISPLAY THE NEW BOOK */
function addBookToArray() {
  data.append("title", bookTitle.value)
  data.append("author", bookAuthor.value)
  data.append("year", bookYear.value)
  newBook = new Book(bookTitle.value, bookAuthor.value, parseInt(bookYear.value))
  if(bookTitle.value != '' && 
     bookAuthor.value != '' && 
     bookYear.value != '')
  {
  myLibrary.push(newBook)
  form.style.display = 'none';
    form.reset();
  }
  else {
    alert("There are field missing duuuude...")
  }
  console.table(myLibrary)
  container.innerHTML = displayBooks(myLibrary);


}
bookAdded.addEventListener('click', addBookToArray)
