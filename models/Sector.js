
const mongoose = require('mongoose');

const nodeElemSchema = new mongoose.Schema({
  element: {
    type: String,
    required: true
  },
  next: {
    type: String,
    required: true
  }
})

const LListSchema = new mongoose.Schema({
  head: nodeElemSchema,
  multiNodes: [nodeElemSchema],
  stack: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Stack'
  },
  corner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Corner'
  },
})


const Sector = mongoose.model("LList", LListSchema);
module.exports = Sector;