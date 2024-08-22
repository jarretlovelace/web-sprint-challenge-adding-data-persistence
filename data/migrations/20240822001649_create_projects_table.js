exports.up = function(knex) {
    return knex.schema.createTable('projects', table => {
      table.increments('project_id'); // Primary key
      table.string('project_name').notNullable(); // Required
      table.string('project_description'); // Optional
      table.boolean('project_completed').defaultTo(false); // Default to false
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('projects');
  };
  