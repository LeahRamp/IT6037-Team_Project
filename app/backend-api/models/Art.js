const mongoose = require('mongoose');

const ArtSchema = new mongoose.Schema({
    title: { type: String },     // required
    type: { type: String },                      // optional
    born: { type: Date },
    died: { type: Date },
    nationality: { type: String },
    knownFor: { type: String },
    notableWorks: { type: String },
    about: { type: String},     // required
    year: { type: Number },
    medium: { type: String },
    dimensions: { type: String },
    location: { type: String }
});

module.exports = mongoose.model('Art', ArtSchema, 'Art'); // 'Art' = collection name