const { addPost } = require('../repositories/postRepository');

const router = require('express').Router();

router.post('/', async (req, res) => {
    const userId = await addPost()
    res.send(`post was upload by ${userId}.`)
})

module.exports = router;