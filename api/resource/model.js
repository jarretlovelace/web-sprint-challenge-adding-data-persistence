const db = require('../../data/dbConfig');

function createResource(resource) {
  return db('resources').insert(resource)
    .then(([resource_id]) => {
      return db('resources').where({ resource_id }).first();
    });
}

function getAllResources() {
  return db('resources');
}

module.exports = {
  createResource,
  getAllResources,
};
