const mongoose = require('mongoose');

const PanelSchema = new mongoose.Schema({
  size: {
    type: String,
    required: true
  },
  tieStrips: {
    type: Number,
    required: true
  },
  linerType: {
    type: String,
    required: true
  },
  dowels: {
    type: Boolean,
    required: false
  },
  r6: {
    type: Boolean,
    required: false
  },
  bigTies: {
    type: Boolean,
    required: false 
  },
  wall: {
    type: String,
    required: false
  },
  leftPosition: String,
  topPosition: String,
});

const Panel5 = mongoose.model('Panel5', PanelSchema);
module.exports = Panel5;
