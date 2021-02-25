const { addGroup } = require('../repositories/groupRepository');

const router = require('express').Router();

router.post('/', async (req, res) => {
    const groupId = await addGroup()
    res.send(`group has created ${groupId}`)
})

module.exports = router;