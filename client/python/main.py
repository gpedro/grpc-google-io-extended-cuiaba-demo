import grpc

import books_service_pb2
import books_service_pb2_grpc

def justDoIt():
    channel = grpc.insecure_channel('localhost:3000')
    service = books_service_pb2_grpc.BookServiceStub(channel)
    response = service.ListBooks(books_service_pb2.Empty())
    print(response.books)

    response = service.GetBook(books_service_pb2.GetBookRequest(id = 3))
    print(response.book)


if __name__ == '__main__':
    justDoIt()