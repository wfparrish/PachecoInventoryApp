const mongoose = require('mongoose');

const StackSchema = new mongoose.Schema({
  panel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Panel'
  },
  top: Number,
  id: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    required: true
  }
});


const Stack = mongoose.model("Stack", StackSchema);
module.exports = Stack;









//Methods of the Stack that I don't know if they are needed


  // StackSchema.methods.push = function(element) {
  //   this.dataStore[this.top++] = element;
  // }
  
  // StackSchema.methods.peek = function() {
  //   return this.dataStore[this.top - 1];
  // }
  
  // StackSchema.methods.pop = function(element) {
  //   return this.dataStore[--this.top]
  // }
  
  // StackSchema.methods.clear = function() {
  //   this.top = 0;
  // }
  
  // StackSchema.methods.length = function() {
  //   return this.top
  // } 