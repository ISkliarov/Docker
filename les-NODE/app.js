const http = require('http');

const server = http.createServer((req, res) => {
  const ip = req.connection.remoteAddress;
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`About: Simple NODE app which return container data\n Container IP Address: ${ip}\n`);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});