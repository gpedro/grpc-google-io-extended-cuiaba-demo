const path = require('path');
let books = require(path.join(__dirname, '..', '..', 'data', 'books.json'));

module.exports = {
    find: (id) => {
        // buscando por id
        const book = books.filter(book => {
            return book.id == id;
        });

        // se não encontrar, retorne null
        if (!book || !book.length) {
            return null;
        }

        return book[0];
    },
    all: () => {
        return books;
    },
    create: (book) => {
        // incrementando id
        book.id = (books.reduce((l, e) => {
            return e.id > l.id ? e : l;
        }).id) + 1;

        // adicionando na lista
        books = books.push(book);
        return book
    },
    edit: (id, book) => {
    },
    destroy: (id) => {
        // removendo por id
        books = books.filter(book => {
            return book.id != id;
        });
    },
}