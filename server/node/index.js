const grpc = require('grpc');
const path = require('path');

const root = path.join(__dirname, '..', '..', 'proto');
const file = 'books_service.proto';

const proto = grpc.load({ root, file });

//////////////////////////////////////////////

const server = new grpc.Server();
const service = require('./service')

server.addService(proto.BookService.service, service);
server.bind('0.0.0.0:3000', grpc.ServerCredentials.createInsecure());
server.start();

console.log('grpc server running on port:', '0.0.0.0:3000');