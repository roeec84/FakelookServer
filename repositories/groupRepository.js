const { Group } = require('../models/group')

const addGroup = async (group) => {
    const newGroup = new Group({
        name: group.name,
        user: group.user,
        users: group.users
    })
    try {
        const savedGroup = await newGroup.save();
        if (savedGroup)
            return savedGroup;
    } catch (error) {
        console.log(error);
    }
    return null;
}

const removeGroup = async (id) => {
    try {
        const foundGroup = await Group.findOneAndRemove({ _id: id })
        if(foundGroup)
            return true;
    } catch (error) {
        console.log(error);
    }
    return false;
}

const editGroup = async (id, group) => {
    try {
        const editedGroup = await Group.findOneAndUpdate({ _id: id }, {
            $set: {
                name: group.name,
                users: group.users
            }
        }, { new: true, useFindAndModify: false })
        return editedGroup;
    } catch (error) {
        console.log(error);
    }
}

const getUserGroups = async (userId) => {
    try {
        const groups = await Group.find({user: userId})
        return groups;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    addGroup,
    removeGroup,
    editGroup,
    getUserGroups
}