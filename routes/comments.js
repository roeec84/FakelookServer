const { addComment } = require('../repositories/commentReposutory');

const router = require('express').Router();

router.post('/', 
async (req, res) => {
    const idUser = await addComment()
    res.send(`comment added by the user ${idUser}.`)
});



module.exports = router;