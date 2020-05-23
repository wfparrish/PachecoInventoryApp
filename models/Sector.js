
const mongoose = require('mongoose');


const SectorSchema = new mongoose.Schema({
  stack: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Stack'
  }],
  corner: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Corner'
  }],
})


const Sector = mongoose.model("Sector", SectorSchema);
module.exports = Sector;

