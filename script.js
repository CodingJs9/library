const addBookBtn = document.querySelector('.add-book')
const booksGrid = document.querySelector('.books')

let myLibrary = []

class Book {
	constructor(name, author, pages) {
		this.name = name
		this.author = author
		this.pages = pages
	}
}

function addBookToLibrary(name, author, pages) {
	let book = new Book(name, author, pages)
	myLibrary.push(book)
	return myLibrary
}
