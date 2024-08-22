const express = require('exprress');
const Projects = require('./model');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const projects = await Projects.getAllProjects();
        req.json(projects);
    } catch (err) {
        next(err)
    }
});

module.exports = router;