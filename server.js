const express = require('express');
const cors = require('cors');
const { port } = require('./config.js')
const mongoose = require('mongoose');
const routes = require('./controllers/routes.js');
mongoose.connect('mongodb://localhost/fullstack');

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
};

const server = express();
server.use(express.json());
server.use(cors(corsOptions));

routes(server);

server.listen(port, (req, res) => {
  console.log(`Server running on port ${port}`);
});