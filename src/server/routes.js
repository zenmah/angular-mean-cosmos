const express = require('express');
const router = express.Router();

const heroService = require('./hero.service');
const scriptService = require('./script.service');

router.get('/heroes', (req, res) => {
  heroService.getHeroes(req, res);
});

router.post('/hero', (req, res) => {
  heroService.postHero(req, res);
});

router.put('/hero/:id', (req, res) => {
  heroService.putHero(req, res);
});

router.delete('/hero/:id', (req, res) => {
  heroService.deleteHero(req, res);
});

router.get('/scripts', (req, res) => {
  scriptService.getScripts(req, res);
});

router.get('/script/:name', (req, res) => {
  scriptService.getScript(req, res);
});


router.post('/script', (req, res) => {
  scriptService.postScript(req, res);
});

router.put('/script/:id', (req, res) => {
  scriptService.putScript(req, res);
});

router.delete('/script/:id', (req, res) => {
  scriptService.deleteScript(req, res);
});

module.exports = router;
