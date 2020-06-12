const Projects = require('../data/dbConfig.js')

module.exports={
    getResource,
    addResource
}

function getResource(){
    return Projects('resources')
}

function addResource(resource){
    return Projects('resources')
            .insert(resource, 'id')}