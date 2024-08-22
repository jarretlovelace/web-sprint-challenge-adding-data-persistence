const db = require('../../data/dbConfig');

function createProject(project) {
    return db('projects').insert(project)
      .then(([project_id]) => {
        return db('projects')
          .where({ project_id })
          .first()
          .then(project => ({
            ...project,
            project_completed: Boolean(project.project_completed), 
          }));
      });
  }
  
function getAllProjects() {
  return db('projects')
  .select(
    'project_id',
    'project_name',
    'project_description',
    'project_completed'
  )
    .then(projects => {
      return projects.map(project => ({
        ...project,
        project_completed: Boolean(project.project_completed),
    }));
})
}

module.exports = {
  getAllProjects,
  createProject
};
