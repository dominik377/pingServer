const express = require('express');
const cors = require('cors');

const fs = require('fs');
const path = require('path');

function logMessage(message) {
  const logPath = path.join(__dirname, 'log.txt');
  fs.appendFileSync(logPath, ` ${message}\n`, 'utf8');
}


logMessage('Starting server');

// repeatedly log every 2 minutes a test message to console
setInterval(() => {
  logMessage('test');
  console.log('test');
  console.info('test info');
  console.error('test error');
}, 10000);

const app = express();

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Welcome to my Node.js app');
});

// simple ping - pong
app.get('/api/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.listen(80, () => console.log('Server running on port 80'));
