const Projects = require('../data/dbConfig.js')

module.exports={
    getResource,
    addResource,
    getProjects,
    addProject,
    findTasks,
    findProjectById,
    addTask
}

function getResource(){
    return Projects('resources')
}

function addResource(resource){
    return Projects('resources')
            .insert(resource, 'id')
}

function getProjects(){
    return Projects('projects')
}

function addProject(project){
    return Projects('projects')
            .insert(project, 'id')
}


function findTasks(id){
    return Projects('tasks as t')
        .where('project_id', id)
        .join('projects as p', 'p.id', '=', 't.project_id')
        .select('p.project_name', 'p.project_description', 't.task_description', 't.text_notes', 't.task_complete')
}

function findProjectById(id){
    return Projects('projects')
            .where({id})
            .first();
}

function addTask(taskData, id){
    const newTask={project_id: id, task_description: taskData.task_description, text_notes: taskData.text_notes, task_complete: taskData.task_complete}
    return Projects('tasks')
            .insert(newTask, 'id')
            .then(taskid => {
                return findTasks(id)
            })
            .catch(error => {
                console.log(error)
            })
        }