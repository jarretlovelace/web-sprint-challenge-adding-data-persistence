exports.up = function(knex) {
    return knex.schema.createTable('tasks', table => {
      table.increments('task_id'); // Primary key
      table.string('task_description').notNullable(); // Required
      table.string('task_notes'); // Optional
      table.boolean('task_completed').defaultTo(false); // Default to false
      table.integer('project_id') // Foreign key to projects
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tasks');
  };
  