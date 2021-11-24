// Element Selectors
const addBookBtn = document.querySelector('.add-book')
const booksGrid = document.querySelector('.books-grid')
const addBookForm = document.querySelector('.add-book-form')
const title = document.querySelector('.title')
const author = document.querySelector('.author')
const numOfBookPages = document.querySelector('.num-of-pages')
const isReadCheckbox = document.querySelector('.is-read')
const overlay = document.querySelector('.overlay')

let myLibrary = JSON.parse(localStorage.getItem('library')) || []

class Book {
	constructor(title, author, pages) {
		this.title = title
		this.author = author
		this.numOfPages = pages
		this.isRead = isReadCheckbox.checked
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
	saveAndRender()
})

// Functions
function addBookToLibrary(title, author, pages) {
	let book = new Book(title, author, pages)
	myLibrary.push(book)
}

function createBookElement(title, author, pages, isRead) {
	const card = document.createElement('div')
	const bookTitle = document.createElement('h3')
	const bookAuthor = document.createElement('h3')
	const numOfPages = document.createElement('p')
	const removeBook = document.createElement('button')
	const isReadBtn = document.createElement('button')

	card.className = 'card'
	bookTitle.className = 'title'
	bookAuthor.className = 'author'
	numOfPages.className = 'pages'
	removeBook.className = 'remove-book btn'
	isReadBtn.className = 'read-btn btn'

	bookTitle.innerText = title
	bookAuthor.innerText = author
	numOfPages.innerText = pages
	removeBook.innerText = 'Remove'
	isReadBtn.innerText = isRead ? 'Read' : 'Not Read'

	removeBook.addEventListener('click', () => {
		myLibrary = myLibrary.filter((book) => book.title != title)
		clearGrid()
		saveAndRender()
	})

	isReadBtn.addEventListener('click', () => {
		isRead = !isRead
		clearGrid()
		saveAndRender()
	})

	card.appendChild(bookTitle)
	card.appendChild(bookAuthor)
	card.appendChild(numOfPages)
	card.appendChild(isReadBtn)
	card.appendChild(removeBook)

	booksGrid.appendChild(card)
}

function render() {
	for (let i = 0; i < myLibrary.length; i++) {
		createBookElement(
			myLibrary[i].title,
			myLibrary[i].author,
			myLibrary[i].numOfPages,
			myLibrary[i].isRead
		)
	}
	title.value = null
	author.value = null
	numOfBookPages.value = null
	isReadCheckbox.value = null
}

function save() {
	localStorage.setItem('library', JSON.stringify(myLibrary))
}

function saveAndRender() {
	save()
	render()
}

function clearGrid() {
	while (booksGrid.firstChild) {
		booksGrid.removeChild(booksGrid.firstChild)
	}
}

render()
