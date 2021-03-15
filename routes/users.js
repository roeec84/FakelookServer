const auth = require('../middlewares/auth');
const router = require('express').Router();
const _ = require('lodash')
const { getUserById } = require('../services/userService');

router.get('/me', auth, async (req, res) => {
    const user = await getUserById(req.user.id);
    const { error } = user;
    if(error) return res.send({error: error});
    user.populate('friends', '-password -email', (err, result) => {
        res.send(result.friends);
    });
})

module.exports = router;