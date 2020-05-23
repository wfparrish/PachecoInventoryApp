const mongoose = require('mongoose');

const YardSchema = new mongoose.Schema({
  sector: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sector'
  }]
})

const Yard = mongoose.model("Yard", YardSchema);
module.exports = Yard;