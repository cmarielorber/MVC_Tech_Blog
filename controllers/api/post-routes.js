const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth')

router.post('/', async (req, res) => {
    console.log('post request received!', req.body)
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        console.log(newPost)

        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatePost = await Post.update( req.body, {

            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        console.log(updatePost)
        res.status(200).json(updatePost);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const blogData = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        if (!blogData) {
            res.status(404).json({ message: 'No post with this id!' });
            return;
        }

        res.status(200).json(blogData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
