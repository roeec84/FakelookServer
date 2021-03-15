const auth = require('../middlewares/auth');
const router = require('express').Router();
const { addPost, getPostsByUser } = require('../services/postService');
const multer = require('multer');
const fs = require('fs')
const path = require('path')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname} - ${Date.now()}`)
    }
});

const upload = multer({ storage: storage });
router.post('/', [auth, upload.single('image')], async (req, res) => {
    req.body.image = fs.readFileSync(path.join(`${__dirname}/../images/${req.file.filename}`))
    console.log(req.body.image);
    req.body.user = req.user._id;
    const post = await addPost(req.body)
    res.send(post)
})

router.get('/', auth, async(req, res) => {
    const posts = await getPostsByUser(req.user._id);
    res.send(posts)
})

module.exports = router;