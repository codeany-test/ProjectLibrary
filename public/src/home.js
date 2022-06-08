function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.filter(book => book.borrows[0].returned ==false).length;
}

function getMostCommonGenres(books) {
const bookGenres = books.map((book) => book.genre);
  const result = [];
  bookGenres.map((genre) => {
    const genreLocation = result.findIndex((element) => element.name === genre);
    if (genreLocation >= 0) {
      result[genreLocation].count = result[genreLocation].count + 1;
    } else {
      result.push({ name: genre, count: 1 });
    }
  });
  result.sort((a, b) => b.count - a.count);
  if (result.length > 5) {
    return result.slice(0, 5);
  }
  return result;
}

function getMostPopularBooks(books) {
  const borrows = books.map(book=>({name:book.title, count:book.borrows.length}));
    borrows.sort((a,b) => b.count - a.count);
    return borrows.slice(0,5);
}

function getMostPopularAuthors(books, authors) {
const popularAuthors = authors.map(author => ({
...author,
bookCount: books.filter(book => book.authorId === author.id).length,
borrowCount: books.filter(book => book.authorId === author.id).reduce((acc, cur) => acc + cur.borrows.length, 0)
})).sort((book, author) => author.borrowCount - book.borrowCount);
popularAuthors.length = 5;
return popularAuthors.map(result => {
return {count: result.borrowCount, name: result.name.first + " " + result.name.last};
})
}



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
