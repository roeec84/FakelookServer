const { addPost } = require('../repositories/postRepository');

const router = require('express').Router();

router.post('/', async (req, res) => {
    const addPost = await addPost()
    res.send(addPost)
})

module.exports = router;