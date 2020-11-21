const express = require('express');
const SectorModel = require('../../models/Sector');
const router = express.Router();

// @route GET api/sectors
// @desc Test sectors retrieval
// @access Public
router.get('/api/sectors', async (req, res) => {
  const sectors = await SectorModel.find({});
  //res.send('Sectors route');

  try {
    res.send(sectors);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/api/sector', async (req, res) => {
  const sector = new SectorModel(req.body);
  try {
    await sector.save();
    res.send(sector);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete('/api/sector/:id', async (req, res) => {
  try {
    const sector = await SectorModel.findByIdAndDelete(req.params.id);

    if (!sector) res.status(404).send('No item found');
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put('/api/sector/:id', async (req, res) => {
  try {
    await SectorModel.findByIdAndUpdate(req.params.id, req.body);
    await SectorModel.save();
    res.send(sector);
  } catch (err) {
    res.status(500).send(err);
  }
});

//------------------------------------------------------------------
//These should be in the routes/api folder,
//exported, imported to this page using require()
//and then using the app.use() syntax
//.get() is the route file
//.render() is the view file

//When I enter the URL in the browser, this is what is called
//vs. 
//on the Home page when I click a link, location.window.href is used
router.get('/api/sector1View', (req, res, next) => {
  res.render('sector1View');
});

router.get('/api/sector2View', (req, res, next) => {
  res.render('sector2View');
});

router.get('/api/sector3View', (req, res, next) => {
  res.render('sector3View');
});

router.get('/api/sector4View', (req, res, next) => {
  res.render('sector4View');
});

router.get('/api/sector5View', (req, res, next) => {
  res.render('sector5View');
});

router.get('/api/sector6View', (req, res, next) => {
  res.render('sector6View');
});

router.get('/api/sector7View', (req, res, next) => {
  res.render('sector7View');
});

router.get('/api/sector8View', (req, res, next) => {
  res.render('sector8View');
});

router.get('/api/sector9View', (req, res, next) => {
  res.render('sector9View');
});

router.get('/api/sector10View', (req, res, next) => {
  res.render('sector10View');
});

router.get('/api/sector11View', (req, res, next) => {
  res.render('sector11View');
});

router.get('/api/sector12View', (req, res, next) => {
  res.render('sector12View');
});
router.get('/api/sector13View', (req, res, next) => {
  res.render('sector13View');
});

router.get('/api/sector14View', (req, res, next) => {
  res.render('sector14View');
});

router.get('/api/sector15View', (req, res, next) => {
  res.render('sector15View');
});

module.exports = router;
