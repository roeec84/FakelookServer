const { login, register } = require('../services/loginService');

const router = require('express').Router();

router.post('/', async (req, res) => {
    const token = await login(req.body.username, req.body.password);
    const { message } = token;
    if (message) return res.send({ message: message });
    res.send(token);
})

router.post('/register', async (req, res) => {
    const result = await register(req.body);
    res.send(result);
})

module.exports = router;