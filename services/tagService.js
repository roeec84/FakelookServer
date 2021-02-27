const { validate } = require('../models/tag');
const tagRepository = require('../repositories/tagRepository')

const addTag = async (title) => {
    const { error } = validate({title})
    if(error){
        return {
            error: error.details
        }
    }
    let res = await tagRepository.addTag(title)
    return res;
}

const getAllTags = async () => {
    let res = await tagRepository.getAllTags()
    if(!res || res.length === 0){
        return {
            error: 'No tags found.'
        }
    }
    return res;
}

module.exports = {
    addTag,
    getAllTags
}