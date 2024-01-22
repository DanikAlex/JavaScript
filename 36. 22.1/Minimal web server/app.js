require("http")
  .createServer((request, response) => {
    switch (request.url) {
        case '/':
            response.writeHead(200).end('Homepage');
            break;
        case '/products':
            response.writeHead(200).end('Products');
            break;
    }
  })
  .listen(8080), () => {
    console.log(' web server started on http://localhost:8080')
  };