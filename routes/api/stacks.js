const express = require('express');
const StackModel = require('../../models/Stack');
const router = express.Router();

// @route GET api/stacks
// @desc Test stacks retrieval
// @access Public
router.get('/api/stacks', async (req, res) => {
  const stacks = await StackModel.find({});
  //res.send('Stacks route');

  try {
    res.send(stacks);
  } catch (err) {
    res.status(500).send('Stacks not retrieved');
    console.log(err);
  }
});

router.post('/api/stack', async (req, res) => {
  const stack = new StackModel(req.body);
  console.log(req.body);
  stack.count = 0;
  stack.top = 5;
  stack.leftPosition = req.body.left;
  stack.topPosition = req.body.top;
  try {
    await stack.save();
    res.send(stack);
  } catch (err) {
    res.status(500).send('Stack not saved');
    console.log(err);
  }
});

router.delete('/api/stack/:id', async (req, res) => {
  try {
    
    const stack = await StackModel.findByIdAndDelete(req.params.id);
    console.log(req.params.id)
    console.log(stack)
    if (!stack) {
        res.status(404).send('No item found');
      } else {
        res.status(200).send(stack);
    }
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
});

router.patch('/api/stack/:id', async (req, res) => {
  try {
    await StackModel.findByIdAndUpdate(req.params.id, req.body);
    await StackModel.save();
    res.send(stack);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
