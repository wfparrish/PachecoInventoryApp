const express = require('express');
const CornerModel4 = require('../../../models/sector4/Corner4');
const router = express.Router();

// @route GET api/corners
// @desc Test corners retrieval
// @access Public
router.get('/api/corners', async (req, res) => {
  const corners = await CornerModel4.find({});
  try {
    res.send(corners);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/api/corner', async (req, res) => {
  const corner = new CornerModel4(req.body);
  try {
    await corner.save();
    res.send(corner);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete('/api/corner/:id', async (req, res) => {
  try {
    const corner = await CornerModel4.findByIdAndDelete(req.params.id);

    if (!corner) res.status(404).send('No item found');
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put('/api/corner/:id', async (req, res) => {
  try {
    await CornerModel4.findByIdAndUpdate(req.params.id, req.body);
    await CornerModel4.save();
    res.send(corner);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
