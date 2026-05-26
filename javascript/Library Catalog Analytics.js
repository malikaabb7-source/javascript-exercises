const books = [
  { title: "The Hobbit", author: "Tolkien", year: 1937, rating: 4.7, genres: ["Fantasy"] },
  { title: "1984", author: "Orwell", year: 1949, rating: 4.8, genres: ["Dystopian", "Political Fiction"] },
  { title: "The Name of the Wind", author: "Rothfuss", year: 2007, rating: 4.5, genres: ["Fantasy", "Adventure"] },
  { title: "Brave New World", author: "Huxley", year: 1932, rating: 4.2, genres: ["Dystopian"] },
  { title: "Dune", author: "Herbert", year: 1965, rating: 4.6, genres: ["Science Fiction", "Adventure"] },
  { title: "Fahrenheit 451", author: "Bradbury", year: 1953, rating: 4.3, genres: ["Dystopian", "Science Fiction"] },
  { title: "The Road", author: "McCarthy", year: 2006, rating: 4.0, genres: ["Post-Apocalyptic"] },
  { title: "To Kill a Mockingbird", author: "Lee", year: 1960, rating: 4.9, genres: ["Classic", "Coming-of-Age"] }
];

// 1
const getRecentBooks = (books, afterYear) => {
  return books
    .filter(book => book.year >= afterYear)
    .map(book => book.title);
};

// 2
const getAverageRating = (books) => {
  if (books.length === 0) return 0;
  const sum = books.reduce((total, book) => total + book.rating, 0);
  return Number((sum / books.length).toFixed(2));
};

// 3
const sortBooksBy = (books, key, asc = true) => {
  return [...books].sort((a, b) => {
    if (a[key] < b[key]) return asc ? -1 : 1;
    if (a[key] > b[key]) return asc ? 1 : -1;
    return 0;
  });
};

// 4
const countGenres = (books) => {
  return books.reduce((acc, book) => {
    book.genres.forEach(genre => {
      acc[genre] = (acc[genre] || 0) + 1;
    });
    return acc;
  }, {});
};

// 5
const groupByAuthor = (books) => {
  return books.reduce((acc, book) => {
    if (!acc[book.author]) {
      acc[book.author] = [];
    }
    acc[book.author].push(book);
    return acc;
  }, {});
};

// 6
const hasHighlyRated = (books, threshold) => {
  return books.some(book => book.rating >= threshold);
};

// 7
const allBeforeYear = (books, year) => {
  return books.every(book => book.year < year);
};

// 8
const findByTitle = (books, title) => {
  return books.find(book => book.title === title);
};

// Bonus 1
const tagClassics = (books) => {
  return books.map(book => ({
    ...book,
    isClassic: book.year <= 1950
  }));
};

// Bonus 2
const dystopianTitlesList = (books) => {
  return books
    .filter(book => book.genres.includes("Dystopian"))
    .map(book => book.title)
    .sort();
};

// Bonus 3
const hasKeyword = (books, keyword) => {
  const lowerKeyword = keyword.toLowerCase();
  return books.some(book => book.title.toLowerCase().includes(lowerKeyword));
};
