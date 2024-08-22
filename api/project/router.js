const express = require('express');
const Projects = require('./model');
const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const project = await Projects.createProject(req.body);
    project.project_completed = Boolean(project.project_completed);
    res.status(201).json(project);
  } catch (err) {
    next(err);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const projects = await Projects.getAllProjects();
    res.json(projects);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
