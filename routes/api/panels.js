const express = require('express');
const router = express.Router();

// @route GET api/panels
// @desc Test panel value retrieval
// @access Public
router.get('/', (req, res) => res.send('Panel route'));

module.exports = router;