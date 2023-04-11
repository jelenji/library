let myLibrary = [];
let overlay = document.querySelector(".overlay");
let modal = document.querySelector(".modal");
let newBookBtn = document.querySelector(".new-book");
let form = document.querySelector("#form");
let uniqueId = 0;

function ReadOrNot() {}

ReadOrNot.prototype.toggleRead = function () {
  this.read = this.read === true ? false : true;
};

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = ++uniqueId;
}

Book.prototype = Object.create(ReadOrNot.prototype);

let test1 = new Book("test1", "author1", 300, 0);
let test2 = new Book("test2", "author2", 1100, 1);

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function removeBook(e) {
  let index = e.originalTarget.parentElement.id;
  myLibrary = myLibrary.filter((obj) => {
    return obj.id != index;
  });
  displayLibrary(myLibrary);
}

function updateRead(e) {
  let index = e.originalTarget.parentElement.id;
  let book = myLibrary.find((obj) => obj.id == index);
  book.toggleRead();
  displayLibrary(myLibrary);
}

function displayLibrary(library) {
  let cards = document.querySelector(".card-container");
  let card, element;

  cards.textContent = "";
  for (let i = 0; i < library.length; i++) {
    card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("id", `${library[i].id}`);

    element = document.createElement("h1");
    element.textContent = `${library[i].title}`;
    card.appendChild(element);

    element = document.createElement("h1");
    element.textContent = `${library[i].author}`;
    card.appendChild(element);

    element = document.createElement("h1");
    element.textContent = `${library[i].pages} pages`;
    card.appendChild(element);

    element = document.createElement("button");
    element.classList.add("read");
    element.textContent = library[i].read === true ? "Read" : "Not Read";
    element.addEventListener("click", (e) => {
      updateRead(e);
    });

    card.appendChild(element);

    element = document.createElement("button");
    element.classList.add("remove");
    element.textContent = "Remove";
    element.addEventListener("click", (e) => {
      removeBook(e);
    });

    card.appendChild(element);

    cards.appendChild(card);
  }
}

function showModal() {
  overlay.classList.add("active");
  modal.classList.add("active");
}

function hideModal() {
  overlay.classList.remove("active");
  modal.classList.remove("active");
}

overlay.addEventListener("click", () => {
  hideModal();
});

newBookBtn.addEventListener("click", () => {
  showModal();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;

  let newBook = new Book(title, author, pages, read);

  addBookToLibrary(newBook);
  displayLibrary(myLibrary);

  form.reset();
  hideModal();
});
