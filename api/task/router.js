const express = require('express');
const Tasks = require('./model');
const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
      const { task_description, project_id } = req.body;
      if (!task_description || !project_id) {
        return res.status(400).json({
          message: 'Task description and project ID are required.'
        });
      }
  
      const task = await Tasks.createTask(req.body);
      res.status(201).json(task);
    } catch (err) {
      if (err.message.includes('foreign key constraint fails')) {
        return res.status(400).json({
          message: 'Invalid project ID.'
        });
      }
      next(err);
    }
  });

router.get('/', async (req, res, next) => {
    try {
      const tasks = await Tasks.getAllTasks();
      res.json(tasks);
    } catch (err) {
      next(err);
    }
  });

module.exports = router;
