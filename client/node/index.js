const grpc = require('grpc');
const path = require('path');

const root = path.join(__dirname, '..', '..', 'proto');
const file = 'books_service.proto';

const proto = grpc.load({ root, file });
//////////////////////////////////////////////

const client = new proto.BookService('localhost:3000', grpc.credentials.createInsecure());

client.ListBooks({}, (error, response) => {
    if (error) {
        console.error({ error });
        return;
    }

    console.info({ response })
    return;
})

client.GetBook({ id: 3 }, (error, response) => {
    if (error) {
        console.error({ error });
        return;
    }

    console.info({ response })
    return;
})
/*
client.DestroyBook({ id: 3 }, (error, response) => {
    if (error) {
        console.error({ error });
        return;
    }

    console.info({ response })
    return;
})

client.GetBook({ id: 3 }, (error, response) => {
    if (error) {
        console.error({ error });
        return;
    }

    console.info({ response })
    return;
})

client.CreateBook({
    book: {
        name: 'Lorem Ipsum',
        year: 2018,
        price: 19.99,
        genre: 'Ficção',
        author: 'Xablau'
    }
}, (error, response) => {
    if (error) {
        console.error({ error });
        return;
    }

    console.info({ response })
    return;
})


client.GetBook({ id: 29 }, (error, response) => {
    if (error) {
        console.error({ error });
        return;
    }

    console.info({ response })
    return;
})
    */
