let myLibrary = [
    {title:"Harry Potter",author:"JK Rowling",year:2000},
    {title:"Notre dame de Paris",author:"Victor Hugo",year:1831},
    {title:"Le rouge et le noir",author:"Stendhal",year:1830}
];
function Book(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
}
/*
function addBookToLibrary() {
   let title = prompt("Title : ")
   let author = prompt("Author : ")
   let year = prompt("Year : ")
  let new_book = new Book(title, author, year)
  myLibrary.push(new_book)
}
*/
console.table(myLibrary)