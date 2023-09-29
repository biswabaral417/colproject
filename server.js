const express = require('express');
const mongoose = require('mongoose')
const app = express();
const path = require('path');

// Serve static files (HTML, CSS, and client-side JS)
app.use(express.static(path.join(__dirname, 'public')));



// data for foods database)
const mongoURI = 'mongodb://localhost:27017/foodsDB';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


//check connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database!');
});


// Define the schema for the 'fooditems' collection
const foodSchema = new mongoose.Schema({
  itemName: String,
  itemPrice: String,
  itemImgLoc: String,
  rSeasons: String,
});

// Create the 'Food' model based on the 'foodSchema'
const Food = mongoose.model('foods', foodSchema);

// Add a new route to get all food items from the 'fooditems' collection
app.get('/api/foods', async (req, res) => {
  try {
    const allFoods = await Food.find({});
    res.json(allFoods);
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



const PORT = 3005; // Change this to your preferred port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
