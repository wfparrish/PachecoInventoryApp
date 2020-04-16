const express = require('express');
const router = express.Router();

// @route GET api/stacks
// @desc Test stack value retrieval
// @access Public
router.get('/', (req, res) => res.send('Stack route'));

module.exports = router;