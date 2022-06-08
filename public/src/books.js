function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}

function findBookById(books, id) {
  return books.find(book => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  return books.reduce((acc, book) => {
    if (book.borrows[0].returned) {
      acc[1].push(book);
    } else {
      acc[0].push(book);
    }
    return acc;
  }, [[], []]);
}

function getBorrowersForBook(book, accounts) {
  const finalArray = book.borrows.map(borrower => ({
    ...accounts.find(acc => acc.id === borrower.id),
    returned: true
  }));
  finalArray.length = finalArray.length > 10 ? 10 : finalArray.length;
  return finalArray;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
