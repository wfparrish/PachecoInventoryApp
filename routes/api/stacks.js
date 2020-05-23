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
    res.status(500).send(err);
  }
});

router.post('/api/stack', async (req, res) => {
  const stack = new StackModel(req.body);
  try {
    await stack.save();
    res.send(stack);
  } catch {
    res.status(500).send(err);
    console.log(err)
  }
});

router.delete('/api/stack/:id', async (req, res) => {
  try {
    const stack = await StackModel.findByIdAndDelete(req.params.id);

    if (!stack) res.status(404).send("No item found");
    res.status(200).send()

    } catch (err) {
      res.status(500).send(err)
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