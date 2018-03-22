const server = require('express');
const cors = require('cors');
const PORT = require('./config.js')
const mongoose = require('mongoose');
const routes = require('./controllers/routes.js');
mongoose.connect('mongodb://localhost/fullstack');

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
};

server.use(cors(corsOptions));
server.use(express.json());

routes(server);

server.listen(PORT, (req, res) => {
  console.log(`Server running on port ${PORT}`);
});