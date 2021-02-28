const { Tag } = require('../models/tag');

const addTag = async (title) => {
    const newTag = new Tag({
        title: title
    })
    try {
        const tag = await newTag.save();
        if(tag)
            return tag
    } catch (error) {
        console.log(error);
    }
    return null;
}

const getAllTags = async () => {
    try {
        const tags = await Tag.find();
        return tags;
    } catch (error) {
        console.log(error);
    }
}

const getTagByTitle = async (title) => {
    try {
        const tag = await Tag.findOne({title: title});
        return tag;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    addTag,
    getAllTags,
    getTagByTitle
}
