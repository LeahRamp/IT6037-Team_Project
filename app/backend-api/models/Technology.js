const mongoose = require('mongoose');

const TechSchema = new mongoose.Schema({
  title: {type: String, required: true},
  type: {type: String, required: true},
  born: {type: Date, required: true},
  died: {type: Date, required: true},
  knownFor: {type: String, required: true},
  about: {type: String, required: true},
  designedBy: {type: String, required: true},
  developer: {type: String, required: true},
});

module.exports = mongoose.model('Technology', TechSchema, 'Technology');
