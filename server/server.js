const dotenv = require('dotenv')

dotenv.config({path: "./.env.local"});

const express = require('express')
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
  dirFiles: "./public/uploads"
});


app.use(cors({
  origin: process.env.APP_URL
}));

app.use(bodyParser.json());


app.use(express.urlencoded({ extended: true }));

app.use(express.static( path.join( __dirname, 'public' ) ))

app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// Routes


// import routes
const skillsRoutes = require('./routes/skills.routes.js');
const contactRoutes = require('./routes/contact.routes.js');
const projectRoutes = require('./routes/project.routes.js');
const categoryRoutes = require('./routes/category.routes.js');
const userRoutes = require('./routes/users.routes.js');
const statisticsRoutes = require('./routes/statistics.routes');
const certificatesRouter = require('./routes/certificate.routes.js');
const aboutRoutes = require('./routes/about.routes.js');
const socialLinksRoutes = require('./routes/socialLinks.routes.js');
const authRoutes = require('./routes/auth.routes.js');

// CRUD Routes
app.use('/api/categories', categoryRoutes);
app.use('/api/skills', skillsRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/certificates', certificatesRouter);
app.use('/api/projects', projectRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// Other Routes
app.use('/api/statistics', statisticsRoutes);
app.use('/api/about', aboutRoutes);
app.use('/api/social-links', socialLinksRoutes);


connectToMongoDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => {
  console.log(`server Running on port ${PORT}`)
});

