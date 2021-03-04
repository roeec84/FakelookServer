const { addComment } = require('../repositories/commentReposutory');

const router = require('express').Router();

router.post('/',
    async (req, res) => {
        try {
            const newComment = await addComment()
            res.send(newComment);
        } catch(err){
            res.status(400).send(err);
        }
});



module.exports = router;