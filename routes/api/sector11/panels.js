const express = require('express');
const PanelMode11 = require('../../../models/sector11/Panel11');
const router = express.Router();

// @route GET api/sector11/panels
// @desc Test panels retrieval
// @access Public
  router.get('/api/sector11/panels', async (req, res) => {
    const panels = await PanelMode11.find({});
    //res.send('Panels route');
    
      try {
        res.send(panels);
      } catch (err) {
        res.status(500).send(err);
      }
    });
    
    //POST a panel
    router.post('/api/sector11/panel', async (req, res) => {
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

      const panel = new PanelMode11(req.body);

      try {
        await panel.save();
        res.send(panel);
      } catch (err){
        res.status(500).send(err);
        console.log(err)
      }
    });
    
    //DELETE a panel
    router.delete('/api/sector11/panel/:id', async (req, res) => {
      try {
        const panel = await PanelMode11.findByIdAndDelete(req.params.id);
    
        if (!panel) res.status(404).send("No item found");
        res.status(200).send()
    
        } catch (err) {
          res.status(500).send(err)
        }
    });
    
    //PUT a panel
    router.put('/api/sector11/panel/:id', async (req, res) => {
      try {
        await PanelMode11.findByIdAndUpdate(req.params.id, req.body);
        await PanelMode11.save();
        res.send(panel);
      } catch (err) {
        res.status(500).send(err);
      }
    })
    
module.exports = router;


//Code for a panel form to test panel submission to the database. Currently we are using Postman for the same functionality

// const express = require('express');
// const router = express.Router();

// // @route GET api/sector11/panels
// // @desc Test panel communication with database
// // @access Public
// router.get('/', (req, res) => {
//   res.send('<form id="dataForm"  class="submission-form" style="visibility: visible; max-width: 170px; margin: 2rem auto; border: 2px solid rgb(205, 214, 162); padding: 2rem;"><label for="size">Size:</label><input type="text" name="size" autocomplete="off"><label for="tieStrips">Tie Strips:</label><input type="text" name="tieStrips" autocomplete="off"><label for="linerType">Liner Type:</label><input type="text" name="linerType" autocomplete="off"><label for="dowels">Dowels:</label><input type="text" name="dowels" autocomplete="off"><label for="r6">R6:</label><input type="text" name="r6" autocomplete="off"><label for="bigTies">Big Ties:</label><input type="text" name="bigTies" autocomplete="off"><label for="wall">Wall:</label><input type="text" name="wall" autocomplete="off"><input type="submit" value="Send"></form>');
// });



// module.exports = router;