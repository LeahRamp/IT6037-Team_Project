const mongoose = require('mongoose');
 
const MathSchema = new mongoose.Schema({
  title: String,
  content: String,
  type: String,
  born: Date,
  died: Date,
  knownfor: String,
  about: String,

});
 
module.exports = mongoose.model('Mathematics', MathSchema, 'Mathematics');