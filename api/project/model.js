const db = require('../../data/dbConfig');

function getAllProjects() {
    return db('projects');
}

module.exports = {
    getAllProjects, 
};