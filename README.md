# grpc demo

Google I/O Extended Cuiabá


### Rodando o Servidor
```bash
npm install
npm start
```


### Rodando o Cliente NodeJS
```
npm run-script client:node
```


### Rodando o Cliente Python
```
npm run-script client:python
```


### Gerando Cliente Python
```
cd client
mkdir python2
python -m grpc_tools.protoc -I../proto --python_out=python2 --grpc_python_out=python2 ../proto/books_service.proto
```