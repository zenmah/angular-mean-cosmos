const express = require('express');
const router = express.Router();

router.get('/heroes', (req, res) => {
  heroService.getHeroes(req, res);
});

module.exports = router;
