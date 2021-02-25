const { Group } = require("../models/group");

const addGroup = async (group) => {
    const newGroup = new Group({
        userName: 'roeecohen',
        title: 'The cool people',
        members: 'roeecohen',
    })

    try {
        await newGroup.save();
    } catch (error) {
        console.log(error);
    }
    return newGroup;
}

module.exports.addGroup = addGroup;