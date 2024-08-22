const db = require('../../data/dbConfig');

function createTask(task) {
    if (!task.task_description || !task.project_id) {
      throw new Error('Task description and project ID are required.');
    }
  
    return db('tasks').insert(task)
      .then(([task_id]) => {
        return db('tasks as t')
          .join('projects as p', 't.project_id', 'p.project_id')
          .select(
            't.task_id',
            't.task_description',
            't.task_notes',
            't.task_completed',
            'p.project_name',
            'p.project_description'
          )
          .where('t.task_id', task_id)
          .first()
          .then(task => ({
            ...task,
            task_completed: Boolean(task.task_completed), 
          }));
      });
  }

function getAllTasks() {
  return db('tasks as t')
    .join('projects as p', 't.project_id', 'p.project_id')
    .select(
      't.task_id',
      't.task_description',
      't.task_notes',
      't.task_completed',
      'p.project_name',
      'p.project_description'
    )
    .then(tasks => {
      return tasks.map(task => ({
        ...task,
        task_completed: Boolean(task.task_completed), 
      }));
    });
}

module.exports = {
  createTask,
  getAllTasks,
};
