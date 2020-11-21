const mongoose = require('mongoose');

const StackSchema = new mongoose.Schema({
  panel: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Panel',
    },
  ],
  top: Number,
  count: {
    type: Number,
    required: true,
  },
  leftPosition: String,
  topPosition: String,
});

const Stack9 = mongoose.model('Stack9', StackSchema);
module.exports = Stack9;
