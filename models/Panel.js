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
  }
});

const Panel = mongoose.model('Panel', PanelSchema);
module.exports = Panel;
