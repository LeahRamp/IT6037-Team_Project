const mongoose = require('mongoose');
 
const MathSchema = new mongoose.Schema({
  title: {type: String, required: true},
  content: {type: String, required: true},
  type: {type: String, required: true},
  born: {type: Date, required: true},
  died: {type: Date, required: true},
  knownfor: {type: String, required: true},
  about: {type: String, required: true},

});
 
module.exports = mongoose.model('Mathematics', MathSchema, 'Mathematics');