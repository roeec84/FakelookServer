const { login, register, generateToken } = require('../services/loginService');
const auth = require('../middlewares/auth');
const router = require('express').Router();

router.get('/me', auth, (req, res) => {
    const token = generateToken(req.user);
    res.send({token: token, user: req.user})
});

router.post('/', async (req, res) => {
    const result = await login(req.body.username, req.body.password);
    const { message } = result;
    if (message) return res.send({ message: message });
    res.send(result);
})

router.post('/register', async (req, res) => {
    const result = await register(req.body);
    res.send(result);
})

module.exports = router;