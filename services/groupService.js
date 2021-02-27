const groupRepository = require('../repositories/groupRepository')
const { validate } = require('../models/group')

const addGroup = async (group) => {
    const { error } = validate(group);
    if(error){
        return {
            error: error.details
        }
    }
    let res = await groupRepository.addGroup(group);
    return res;
}

const removeGroup = async (id) => {
    let res = await groupRepository.removeGroup(id);
    return res;
}

const editGroup = async (id, group) => {
    const { error } = validate(group);
    if(error) {
        return {
            error: error.details
        }
    }
    let res = await groupRepository.editGroup(id, group);
    return res;
}

const getUserGroups = async (userId) => {
    let res = await groupRepository.getUserGroups(userId);
    if(!res || res.length === 0){
        return {
            error: 'No groups found.'
        }
    }
    return res;
}

module.exports = {
    addGroup,
    removeGroup,
    editGroup,
    getUserGroups
}