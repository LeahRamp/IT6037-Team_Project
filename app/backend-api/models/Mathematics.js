const mongoose = require('mongoose');
 
const MathSchema = new mongoose.Schema({
  title: {type: String},
  content: {type: String},
  type: {type: String},
  born: {type: Date},
  died: {type: Date},
  knownFor: {type: String},
  about: {type: String},

});
 
module.exports = mongoose.model('Mathematics', MathSchema, 'Mathematics');