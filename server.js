const express = require('express');
const app = express();
const path = require('path');

// Serve static files (HTML, CSS, and client-side JS)
app.use(express.static(path.join(__dirname, 'public')));

// Mock data for foods (replace this with your actual data source or database)
const foodsData = require('./public/foods.json');

// Endpoint to send the foods data to the frontend
app.get('/api/foods', (req, res) => {
  res.json(foodsData.foods);
});

// Endpoint to handle search requests
app.get('/api/search', (req, res) => {
  const { searchText } = req.query;

  const filteredFoods = foodsData.foods.filter((item) =>
    item.itemName.toLowerCase().includes(searchText.toLowerCase())
  );

  res.json(filteredFoods);
});

const PORT = 3000; // Change this to your preferred port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
