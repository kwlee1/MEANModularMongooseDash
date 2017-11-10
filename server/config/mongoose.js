const path       = require('path');
const modelsPath = path.join(__dirname, '../models');
const mongoose   = require('mongoose');
const fs         = require('fs');

// Required to remove deprecation warning
mongoose.Promise = global.Promise;

// Create connection to database
mongoose.connect("mongodb://localhost/moddog_db");

// Listen for connected event and log a message
mongoose.connection.on('connected', () => console.log('Connected to MongoDB'));

fs.readdirSync(modelsPath).forEach(file => {
  if (file.indexOf('.js') > -1) {
    require(path.join(modelsPath, file));
  }
});