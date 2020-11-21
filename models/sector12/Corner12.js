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

const Corner12 = mongoose.model("Corner12", CornerSchema);
module.exports = Corner12;