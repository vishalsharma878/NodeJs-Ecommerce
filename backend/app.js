const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const bodyParser = require('body-parser');

app.use(cors())
app.use(bodyParser.json());

// Set up API routes
app.use('/api', userRoutes);
app.use('/api', productRoutes);
app.use('/api', cartRoutes);

// Root route to test if server is running
app.get('/api', (req, res) => {
  res.send('API is running!');
});

const startServer = async () => {
    try {
      await mongoose.connect('mongodb+srv://vishalsharma28784:pE7gVP6ocWBp0zwR@cluster2.rmqgd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2');
      console.log("Connected to MongoDB");
  
      const port = 3000;
      app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
    } catch (err) {
      console.error("Failed to connect to MongoDB:", err);
      process.exit(1);  
    }
  };
  
  startServer();