const express = require('express');
const yardModel = require('../../models/Yard')
const router = express.Router();

// @route GET api/sectors
// @desc Test yard retrieval
// @access Public
  router.get('/api/yards', async (req, res) => {
    const yards = await yardModel.find({});
    //res.send('Yard route');
    
      try {
        res.send(yards);
      } catch (err) {
        res.status(500).send(err);
      }
    });
    
    router.post('/api/yard', async (req, res) => {
      const yard = new yardModel(req.body);
      try {
        await yard.save();
        res.send(yard);
      } catch {
        res.status(500).send(err);
      }
    });
    
    router.delete('/api/yard/:id', async (req, res) => {
      try {
        const yard = await yardModel.findByIdAndDelete(req.params.id);
    
        if (!yard) res.status(404).send("No item found");
        res.status(200).send()
    
        } catch (err) {
          res.status(500).send(err)
        }
    });
    
    router.patch('/api/yard/:id', async (req, res) => {
      try {
        await yardModel.findByIdAndUpdate(req.params.id, req.body);
        await yardModel.save();
        res.send(yard);
      } catch (err) {
        res.status(500).send(err);
      }
    })
    
module.exports = router;

