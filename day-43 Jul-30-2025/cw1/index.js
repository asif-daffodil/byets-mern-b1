const fs = require('fs');
const http = require('http');
const { sazzad, siam } = require('./sazzad');
const { default: chalk } = require('chalk');

fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});

fs.writeFile('output.txt', 'This is a test output.', (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File written successfully.');
});

console.log('Sazzad says:', sazzad());
console.log('Siam says:', siam());
console.log(chalk.green('This is a blue message!'));
console.log(chalk.blue('This is a blue message!'));

const server = http.createServer((req, res) => {
    if (req.url === '/sazzad') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(sazzad());
        return;
    }
    if (req.url === '/siam') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(siam());
        return;
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!\n');
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});