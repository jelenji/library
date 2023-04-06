let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
let test1 = new Book("test1", "author1", 300, 0);
let test2 = new Book("test2", "author2", 1100, 1);

function addBookToLibrary(book) {
  myLibrary.push(book);
}

addBookToLibrary(test1);
addBookToLibrary(test2);

function displayLibrary(library) {
  let cards = document.querySelector(".card-container");
  let card, element;
  for (let i = 0; i < library.length; i++) {
    card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("id", `${library.length}`);

    element = document.createElement("h1");
    element.textContent = `${library[i].title}`;
    card.appendChild(element);

    element = document.createElement("h1");
    element.textContent = `${library[i].author}`;
    card.appendChild(element);

    element = document.createElement("h1");
    element.textContent = `${library[i].pages} pages`;
    card.appendChild(element);

    element = document.createElement("h1");
    element.textContent = library[i].pages === 1 ? "Read" : "Not Read";
    card.appendChild(element);

    element = document.createElement("button");
    element.textContent = 'Remove';
    card.appendChild(element);

    cards.appendChild(card);
  }
}

displayLibrary(myLibrary);
