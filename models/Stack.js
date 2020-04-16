const mongoose = require('mongoose');
const StackSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    required: true
  }
});