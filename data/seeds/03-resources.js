
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, resource_name: "GitHub", resource_description: "Store your homework"},
        {id: 2, resource_name: "Visual Studio Code", resource_description: "Where you do you homework"},
        {id: 3, resource_name: "Slack", resource_description: "Class communication"}, 
        {id: 4, resource_name: "Axios", resource_description: "get and display data"}
       
      ]);
    });
};
