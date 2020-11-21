const express = require('express');
const PanelModel2 = require('../../../models/sector2/Panel2');
const router = express.Router();

// @route GET api/panels
// @desc Test panels retrieval
// @access Public
  router.get('/api/sector2/panels', async (req, res) => {
    const panels = await PanelModel2.find({});
    //res.send('Panels route');
    
      try {
        res.send(panels);
      } catch (err) {
        res.status(500).send(err);
      }
    });
    
    //POST a panel
    router.post('/api/sector2/panel', async (req, res) => {
      if (req.body !== null) {
        if (req.body.dowels === 'on') {
          req.body.dowels = true;
        }
        if (req.body.r6 === 'on') {
          req.body.r6 = true;
        }
        if (req.body.bigTies === 'on') {
          req.body.bigTies = true;
        }
      }

      const panel = new PanelModel2(req.body);

      try {
        await panel.save();
        res.send(panel);
      } catch (err){
        res.status(500).send(err);
        console.log(err)
      }
    });
    
    //DELETE a panel
    router.delete('/api/sector2/panel/:id', async (req, res) => {
      try {
        const panel = await PanelModel2.findByIdAndDelete(req.params.id);
    
        if (!panel) res.status(404).send("No item found");
        res.status(200).send()
    
        } catch (err) {
          res.status(500).send(err)
        }
    });
    
    //PUT a panel
    router.put('/api/sector2/panel/:id', async (req, res) => {
      try {
        await PanelModel2.findByIdAndUpdate(req.params.id, req.body);
        await PanelModel2.save();
        res.send(panel);
      } catch (err) {
        res.status(500).send(err);
      }
    })
    
module.exports = router;
