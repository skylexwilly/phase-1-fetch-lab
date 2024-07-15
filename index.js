function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}


function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      return data; // or further processing if needed
    })
    .catch(error => {
      console.error('Error fetching books:', error);
      throw error; // re-throw the error for handling in higher layers
    });
}


// Function to fetch and display book titles from the Game of Thrones API
async function fetchBooks() {
  const url = 'https://anapioficeandfire.com/api/books'; // Endpoint for books

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const books = await response.json();
    renderBooks(books);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Function to render book titles into the DOM
function renderBooks(books) {
  const main = document.getElementById('main-content');

  books.forEach(book => {
    const bookElement = document.createElement('div');
    bookElement.classList.add('book');

    const titleElement = document.createElement('h2');
    titleElement.textContent = book.name;
    bookElement.appendChild(titleElement);

    const authorElement = document.createElement('p');
    authorElement.textContent = `Author(s): ${book.authors.join(', ')}`;
    bookElement.appendChild(authorElement);

    const pagesElement = document.createElement('p');
    pagesElement.textContent = `Number of Pages: ${book.numberOfPages}`;
    bookElement.appendChild(pagesElement);

    main.appendChild(bookElement);
  });
}

// Call fetchBooks when the page loads
document.addEventListener('DOMContentLoaded', () => {
  fetchBooks();
});