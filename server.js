const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to serve the JSON data
// app.get('/api/foods', (req, res) => {
//   const foodsData = require('./public/foods.JSON');
//   res.json(foodsData.foods);
// });
//dont know why this doesnt work



// Serve the index.html file for any other route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
