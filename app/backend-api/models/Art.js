const mongoose = require('mongoose');

const ArtSchema = new mongoose.Schema({
title: {type: String, required: true},
born: {type: Date, required: true},
died: {type: Date, required: true},
nationality: {type: String, required: true},
knownfor: {type: String, required: true},
notableworks: {type: String, required: true},
about: {type: String, required: true},
year: {type: Number, required: true},
medium: {type: String, required: true},
dimensions: {type: String, required: true},
location: {type: String, required: true},
});

module.exports = mongoose.model('Art', ArtSchema, 'Art'); // 'Art' = collection name