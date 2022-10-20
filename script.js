const library = document.querySelector('.booksContainer')
function displayBooks(numberofBooks) {
  for (let  i = 0; i < numberofBooks; i++) {
      let bookCard = document.createElement('div')
      bookCard.classList.add('card')
      library.appendChild(bookCard)
    }
}
//displayBooks(20)