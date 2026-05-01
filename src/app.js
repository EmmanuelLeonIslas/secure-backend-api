const express = require('express');
const app = express();

require('dotenv').config();

app.use(express.json()); // For requests with JSON

app.get('/', (req, res) => {
  res.json({ message: 'API running' });
});

app.listen(3000, () => 'Server running');
