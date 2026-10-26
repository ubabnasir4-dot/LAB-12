// backend/server.js
const http = require('http');
// Create an HTTP server
const server = http.createServer((req, res) => {
  // Check if the URL is '/api' and the method is GET
  if (req.url === '/api' && req.method === 'GET') {
    // Set the response headers with status 200 and content type JSON
    res.writeHead(200, { 'Content-Type': 'application/json' });

    // Send back a JSON response
    res.end(JSON.stringify({ message: 'Hello from backend!' }));
  } else {
    // If the route is not found, return 404
    res.writeHead(404);
    res.end('Not Found');
  }
});

// Make the server listen on port 5000
server.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});// backend/server.js
