const express = require('express');
const cors = require('cors');

console.log('test log message')

const app = express();

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));


// simple ping - pong
app.get('/api/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.listen(80, () => console.log('Server running on port 80'));
