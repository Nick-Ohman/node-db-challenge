
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id:1, project_id: 1, task_description: "User Interface and Git", task_notes: "week 1", task_complete: true},
        {id:2, project_id: 1, task_description: "Advanced CSS and Intro JavaScript", task_notes: "week 2", task_complete: true},
        {id:3, project_id: 2, task_description: "Applied JavaScript", task_notes: "week 3", task_complete: true},
        {id:4, project_id: 2, task_description: "Intro To React", task_notes: "week 4", task_complete: true},
        {id:5, project_id: 3, task_description: "Advanced React", task_notes: "week 5", task_complete: true},
        {id:6, project_id: 3, task_description: "Advanced State Management", task_notes: "week 6", task_complete: true},
        {id:7, project_id: 4, task_description: "Build A Web API", task_notes: "week 7", task_complete: true},
        {id:8, project_id: 4, task_description: "Adding Data Persistence", task_notes: "week 8", task_complete: false},
      ]);
    });
};
