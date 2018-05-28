const database = require('./database');
const grpc = require('grpc');

function wrap(message, proxy) {
    return (call, callback) => {
        console.debug(`${message}#request: `, call.request)
        proxy(call, function (err, response) {
            console.debug(`${message}#response: `, { err, body: response })
            callback(err, response)
        });
    }
}

module.exports = {
    ListBooks: wrap('ListBooks', (call, callback) => {
        callback(null, database.all())
    }),
    GetBook: wrap('GetBook', (call, callback) => {
        const book = database.find(call.request.id);

        if (!book) {
            callback({
                code: grpc.status.INVALID_ARGUMENT,
                message: "Book not found!",
            });
            return;
        }

        callback(null, { book })
    }),
    CreateBook: wrap('CreateBook', (call, callback) => {
        callback(null, { book: database.create(call.request.book) })
    }),
    EditBook: wrap('EditBook', (call, callback) => {
        console.log(call.request)
    }),
    DestroyBook: wrap('DestroyBook', (call, callback) => {
        database.destroy(call.request.id)
        callback(null, {})
    }),
};