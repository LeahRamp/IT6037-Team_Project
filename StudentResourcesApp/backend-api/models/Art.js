const mongoose = require('mongoose');

const ArtSchema = mongoose.Schema({
title: String,
type: String,
born: Date,
died: Date,
nationality: String,
knownfor: String,
notableworks: String,
about: String,
year: Number,
medium: String,
dimensions: String,
location: String,
});

module.exports = mongoose.model('Art', ArtSchema, 'Art'); // 'Art' = collection name