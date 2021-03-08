const { login, register } = require('../services/loginService');

const router = require('express').Router();

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