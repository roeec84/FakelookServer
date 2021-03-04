const commentRepository = require('../repositories/commentRepositroy')

const router = require('express').Router();

router.post('/',
    async (req, res) => {
        try {
            const newComment = await commentRepository.addComment()
            res.send(newComment);
        } catch(err){
            res.status(400).send(err);
        }
});



module.exports = router;