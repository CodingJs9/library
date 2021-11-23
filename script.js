// Element Selectors
const addBookBtn = document.querySelector('.add-book')
const booksGrid = document.querySelector('.books-grid')
const addBookForm = document.querySelector('.add-book-form')
const title = document.querySelector('.title')
const author = document.querySelector('.author')
const numOfBookPages = document.querySelector('.num-of-pages')
const overlay = document.querySelector('.overlay')

let myLibrary = []

class Book {
	constructor(title, author, pages) {
		this.title = title
		this.author = author
		this.numOfPages = pages
	}
}

// Event listeners
addBookBtn.addEventListener('click', (e) => {
	e.preventDefault()
	addBookForm.classList.remove('no-display')
	overlay.classList.remove('no-display')
})

addBookForm.addEventListener('submit', (e) => {
	e.preventDefault()
	clearGrid()
	addBookToLibrary(title.value, author.value, numOfBookPages.value)
	addBookForm.classList.add('no-display')
	overlay.classList.add('no-display')
	render()
})

// Functions
function addBookToLibrary(title, author, pages) {
	let book = new Book(title, author, pages)
	myLibrary.push(book)
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

	removeBook.addEventListener('click', () => {
		myLibrary = myLibrary.filter((book) => book.title != title)
		clearGrid()
		render()
	})

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

function clearGrid() {
	while (booksGrid.firstChild) {
		booksGrid.removeChild(booksGrid.firstChild)
	}
}

render()
