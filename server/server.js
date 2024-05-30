const connectToMongoDB = require('./db/connecttoMongoDB');
const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const categoryRoutes = require('./routes/category.routes.js');
const contactRoutes = require('./routes/contact.routes.js');
const userRoutes = require('./routes/users.routes.js');

dotenv.config();


const app = express();


app.use(cors());
app.use(bodyParser.json());




// Routes
app.use('/api/categories', categoryRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/users', userRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT,() => {
  connectToMongoDB();
  console.log(`server Running on port ${PORT}`)
});

