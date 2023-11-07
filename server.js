const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 5000;

const newsSearchTerm = '';
const apiUrl = 'https://content.guardianapis.com/search?q=&api-key=d265a3b3-9e61-4c06-8132-d04497d84c47';

// Enable CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Proxy route to fetch data from the external API
app.get('/api/news', async (req, res) => {
  try {
    console.log(req.params);
    const response = await axios.get(`${apiUrl}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch news from api' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
