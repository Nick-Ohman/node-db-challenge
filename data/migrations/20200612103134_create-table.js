
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
      tbl.increments();
      tbl.text('project_name').notNullable();
      tbl.text('project_description');
      tbl.boolean('project_complete').defaultTo(false);

  })
  .createTable('tasks', tbl => {
      tbl.increments();
      tbl.integer('project_id').notNullable().references('id').inTable('projects').onUpdate('CASCADE').onDelete('RESTRICT')
      tbl.text('task_description').notNullable()
      tbl.text('text_notes')
      tbl.boolean('task_complete').defaultTo(false)
  })
  .createTable('resources', tbl =>{
      tbl.increments()
      tbl.text('resource_name').notNullable()
      tbl.text('resource_description')
  })
  .createTable('project_resources', tbl => {
      tbl.increments()
      tbl.integer('project_id').notNullable().references('id').inTable('projects').onUpdate('CASCADE').onDelete('RESTRICT')
      tbl.integer('resource_id').notNullable().references('id').inTable('resources').onUpdate('CASCADE').onDelete('RESTRICT')

  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('project_resources')
  .dropTableIfExists('resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('projects')
};
