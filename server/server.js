const connectToMongoDB = require('./db/connecttoMongoDB');
const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const categoryRoutes = require('./routes/category.routes.js');
const skillsRoutes = require('./routes/skills.routes.js');
const contactRoutes = require('./routes/contact.routes.js');
const projectRoutes = require('./routes/project.routes.js');
const userRoutes = require('./routes/users.routes.js');
const authRoutes = require('./routes/auth.routes.js');


const app = express();


app.use(cors());
app.use(bodyParser.json());




// Routes
app.use('/api/categories', categoryRoutes);
app.use('/api/skills', skillsRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT,() => {
  connectToMongoDB();
  console.log(`server Running on port ${PORT}`)
});

