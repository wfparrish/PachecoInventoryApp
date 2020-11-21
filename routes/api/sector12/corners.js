const express = require('express');
const CornerModel12 = require('../../../models/sector12/Corner12');
const router = express.Router();

// @route GET api/corners
// @desc Test corners retrieval
// @access Public
router.get('/api/corners', async (req, res) => {
  const corners = await CornerModel12.find({});
  try {
    res.send(corners);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/api/corner', async (req, res) => {
  const corner = new CornerModel12(req.body);
  try {
    await corner.save();
    res.send(corner);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete('/api/corner/:id', async (req, res) => {
  try {
    const corner = await CornerModel12.findByIdAndDelete(req.params.id);

    if (!corner) res.status(404).send('No item found');
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put('/api/corner/:id', async (req, res) => {
  try {
    await CornerModel12.findByIdAndUpdate(req.params.id, req.body);
    await CornerModel12.save();
    res.send(corner);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
