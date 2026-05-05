const express = require('express');
const app = express();

const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

require('dotenv').config();

app.use(express.json()); // For requests with JSON

// Just apply DNS on local development
if (process.env.NODE_ENV !== "production") {
  try {
    require('node:dns/promises').setServers(['1.1.1.1', '8.8.8.8']);
  } catch(error) {
    console.log("DNS fix not needed in production");
  }
}

connectDB();

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API running' });
});

app.listen(3000, () => 'Server running');
