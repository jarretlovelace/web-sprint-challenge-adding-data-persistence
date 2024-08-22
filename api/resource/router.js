const express = require('express');
const Resources = require('./model');
const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const resource = await Resources.createResource(req.body);
    res.status(201).json(resource);
  } catch (err) {
    next(err);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const resources = await Resources.getAllResources();
    res.json(resources);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
