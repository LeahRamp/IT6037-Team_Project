const mongoose = require('mongoose');

const TechSchema = new mongoose.Schema({
  title: String,
  type: String,
  born: Date,
  died: Date,
  knownFor: String,
  about: String,
  designedBy: String,
  developer: String,
});

module.exports = mongoose.model('Technology', TechSchema, 'Technology');
