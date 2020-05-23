const mongoose = require('mongoose');

const StackSchema = new mongoose.Schema({
  panel: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Panel'
  }],
  top: Number,
  count: {
    type: Number,
    required: true
  }
});


const Stack = mongoose.model("Stack", StackSchema);
module.exports = Stack;
