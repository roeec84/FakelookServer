const { addUser } = require('../repositories/userRepository');

const router = require('express').Router();

router.post('/', async (req, res) => {
    const id = await addUser()
    res.send(`user id ${id} has been created.`)
})

module.exports = router;