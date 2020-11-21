const express = require('express');
const StackModel4 = require('../../../models/sector4/Stack4');
const PanelModel4 = require('../../../models/sector4/Panel4');
const router = express.Router();

// @route GET api/sector4/stacks
// @desc Test stacks retrieval
// @access Public
router.get('/api/sector4/stacks', async (req, res) => {
  const stacks = await StackModel4.find({});
  //res.send('Stacks route');

  try {
    res.send(stacks);
  } catch (err) {
    res.status(500).send('Stacks not retrieved');
    console.log(err);
  }
});

// @route GET api/sector4/stack/:id
// @desc Gets one stack from the database
// @access Public
router.get('/api/sector4/stack/:id', async (req, res) => {
  
  let id = req.params.id
  //console.log(req.params.id)
  const stack = await StackModel4.findById(id);
  //creates a new array on the stack object to hold panel model data
  stack.objArray = [];
  const panelIds = [...stack.panel];
  for (let index = 0; index <= panelIds.length - 1; index++) {
    let panel = await PanelModel4.findById(stack.panel[index]);
    stack.objArray.push(panel);
  }
  try {
    res.send(stack.objArray);
  } catch (err) {
    res.status(500).send('Stacks not retrieved');
    console.log(err);
  }
});

router.post('/api/sector4/stack', async (req, res) => {
  const stack = new StackModel4(req.body);
  console.log(req.body)
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

router.delete('/api/sector4/stack/:id', async (req, res) => {
  try {
    console.log(req.body)
    const stack = await StackModel4.findByIdAndDelete(req.params.id);
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

router.put('/api/sector4/stack/:id', async (req, res) => {
  try {
    const stack = await StackModel4.findByIdAndUpdate(req.params.id);
    stack.panel = req.body.panel
    await stack.save();
    res.send(stack);
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
});

module.exports = router;
