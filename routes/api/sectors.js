const express = require('express');
const sectorModel = require('../../models/Sector')
const router = express.Router();

// @route GET api/sectors
// @desc Test sectors retrieval
// @access Public
  router.get('/api/sectors', async (req, res) => {
    const sectors = await sectorModel.find({});
    //res.send('Sectors route');
    
      try {
        res.send(sectors);
      } catch (err) {
        res.status(500).send(err);
      }
    });
    
    router.post('/api/sector', async (req, res) => {
      const sector = new sectorModel(req.body);
      try {
        await sector.save();
        res.send(sector);
      } catch {
        res.status(500).send(err);
      }
    });
    
    router.delete('/api/sector/:id', async (req, res) => {
      try {
        const sector = await sectorModel.findByIdAndDelete(req.params.id);
    
        if (!sector) res.status(404).send("No item found");
        res.status(200).send()
    
        } catch (err) {
          res.status(500).send(err)
        }
    });
    
    router.patch('/api/sector/:id', async (req, res) => {
      try {
        await sectorModel.findByIdAndUpdate(req.params.id, req.body);
        await sectorModel.save();
        res.send(sector);
      } catch (err) {
        res.status(500).send(err);
      }
    })
    
module.exports = router;

