const mongoose = require('mongoose');

const TechSchema = new mongoose.Schema({
  title: {type: String},
  type: {type: String},
  born: {type: Date},
  died: {type: Date},
  knownFor: {type: String},
  about: {type: String},
  designedBy: {type: String},
  developer: {type: String},
});

module.exports = mongoose.model('Technology', TechSchema, 'Technology');
