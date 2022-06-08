function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => a.name.last.toLowerCase()> b.name.last.toLowerCase()? 1 : -1)
}

function getTotalNumberOfBorrows(account, books) {
  return books.map(book => book.borrows.filter(borrow => borrow.id === account.id).length).reduce((a, c) => a + c, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return (
    books.filter(
      book => book.borrows[0].id === account.id
    ).map(
      book => {
        book.author = authors.find(author => author.id === book.authorId);
        return book;
      }
    )
  );
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
