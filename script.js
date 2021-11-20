const addBookBtn = document.querySelector('.add-book')
const booksGrid = document.querySelector('.books-grid')

let myLibrary = []

class Book {
	constructor(title, author, pages) {
		this.title = title
		this.author = author
		this.numOfPages = pages
	}
}

function addBookToLibrary(title, author, pages) {
	let book = new Book(title, author, pages)
	myLibrary.push(book)
	return myLibrary
}

function createBookElement(title, author, pages) {
	const card = document.createElement('div')
	const bookTitle = document.createElement('h3')
	const bookAuthor = document.createElement('h3')
	const numOfPages = document.createElement('p')
	const removeBook = document.createElement('button')

	card.classList.add('card')
	bookTitle.classList.add('title')
	bookAuthor.classList.add('author')
	numOfPages.classList.add('pages')
	removeBook.classList.add('remove-book')

	bookTitle.innerText = title
	bookAuthor.innerText = author
	numOfPages.innerText = pages
	removeBook.innerText = 'Remove'

	card.appendChild(bookTitle)
	card.appendChild(bookAuthor)
	card.appendChild(numOfPages)
	card.appendChild(removeBook)

	booksGrid.appendChild(card)
}

function render() {
	for (let i = 0; i < myLibrary.length; i++) {
		createBookElement(
			myLibrary[i].title,
			myLibrary[i].author,
			myLibrary[i].numOfPages
		)
	}
}

render()
