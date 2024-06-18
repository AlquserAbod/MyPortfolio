const dotenv = require('dotenv')

dotenv.config();

const express = require('express')
const skillsRoutes = require('./routes/skills.routes.js');
const contactRoutes = require('./routes/contact.routes.js');
const projectRoutes = require('./routes/project.routes.js');
const categoryRoutes = require('./routes/category.routes.js');
const userRoutes = require('./routes/users.routes.js');
const certificatesRouter = require('./routes/certificate.routes.js');
const authRoutes = require('./routes/auth.routes.js');
const  { bindFlmngr } = require("@flmngr/flmngr-server-node-express");
const  connectToMongoDB = require("./db/connecttoMongoDB.js");

const cors = require('cors');
const bodyParser = require('body-parser')
const path = require('path')

const app = express();


bindFlmngr({
  app: app,
  urlFileManager: "/flmngr",
  urlFiles: "/uploads/",
  dirFiles: "./uploads"
});


app.use(cors());
app.use(bodyParser.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/categories', categoryRoutes);
app.use('/api/skills', skillsRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/certificates', certificatesRouter);

app.use('/api/projects', projectRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT,() => {
  connectToMongoDB();
  console.log(`server Running on port ${PORT}`)
});

