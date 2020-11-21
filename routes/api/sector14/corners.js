const express = require('express');
const CornerModel14 = require('../../../models/sector14/Corner14');
const router = express.Router();

// @route GET api/corners
// @desc Test corners retrieval
// @access Public
router.get('/api/corners', async (req, res) => {
  const corners = await CornerModel14.find({});
  try {
    res.send(corners);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/api/corner', async (req, res) => {
  const corner = new CornerModel14(req.body);
  try {
    await corner.save();
    res.send(corner);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete('/api/corner/:id', async (req, res) => {
  try {
    const corner = await CornerModel14.findByIdAndDelete(req.params.id);

    if (!corner) res.status(404).send('No item found');
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put('/api/corner/:id', async (req, res) => {
  try {
    await CornerModel14.findByIdAndUpdate(req.params.id, req.body);
    await CornerModel14.save();
    res.send(corner);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
