const express = require('express');
const CornerModel1 = require('../../../models/sector1/Corner1');
const router = express.Router();

// @route GET api/sector1/corners
// @desc Test corners retrieval
// @access Public
router.get('/api/sector1/corners', async (req, res) => {
  const corners = await CornerModel1.find({});
  try {
    res.send(corners);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/api/sector1/corner', async (req, res) => {
  const corner = new CornerModel1(req.body);
  try {
    await corner.save();
    res.send(corner);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete('/api/sector1/corner/:id', async (req, res) => {
  try {
    const corner = await CornerModel1.findByIdAndDelete(req.params.id);

    if (!corner) res.status(404).send('No item found');
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put('/api/sector1/corner/:id', async (req, res) => {
  try {
    await CornerModel1.findByIdAndUpdate(req.params.id, req.body);
    await CornerModel1.save();
    res.send(corner);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
