const mongoose = require('mongoose');

const CornerSchema = new mongoose.Schema({
  size: {
    type: String,
    required: true
  },
  tieStrips: {
    type: Number,
    required: true
  },
  dowels: {
    type: Boolean,
    required: false
  },
});

const Corner13 = mongoose.model("Corner13", CornerSchema);
module.exports = Corner13;