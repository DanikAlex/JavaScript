import express, { NextFunction, Request, Response } from "express";

const products = [
    {id: 1, name: 'chai', price: 6.00, stock: 100},
    {id: 2, name: 'coffee', price: 5.00, stock: 200},
    {id: 3, name: 'hot chocolate', price: 10.00, stock: 300}
]

const server = express();

// middlewares start here

// express.json is an express provides middleware that does the following:
// 1.it checks if the request headers contains: content-type: application/json
// 2.if so, it creates a json object in req.body
server.use(express.json());

server.get('*', (req: Request, res: Response, next: NextFunction) => {
    console.log('received a GET request');
    next();
})

server.get('/api/products', (req: Request, res: Response, next: NextFunction) => {
    res.json(products);
})

server.get('/api/products/:id', (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    const product = products.find(p => p.id === id);
    res.json(product);
})

server.post('/api/products', (req: Request, res: Response, next: NextFunction) => {
    console.log('AQUI');
})

//middlewares end here

server.listen(8080, () => {
    console.log("server started on http://localhost:8080");
})