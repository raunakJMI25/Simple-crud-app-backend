const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js'); // Ensure correct import
const productRouter = require(`./routes/product.route.js`);
const app = express();

const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

//routes
app.use("/api/products", productRouter)

// Default Route
app.get('/', (req, res) => {
  res.send('Server is running properly');
});

// MongoDB Connection
mongoose.connect('mongodb+srv://raunak:backend%4001@backenddb.sej4v.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
  .then(() => {
    console.log("Database connected");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.log(`Database connection error: ${err}`);
  });
