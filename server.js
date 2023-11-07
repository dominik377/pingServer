const express = require('express');
const cors = require('cors');


// repeatedly log every 2 minutes a test message to console
setInterval(() => {
  console.log('test');
}, 120000);

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
