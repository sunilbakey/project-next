const express = require("express");
const router = new express.Router();
const User = require('../modal/users');

router.post("/users", async (req, res) => {
    try {
        const user = new User(req.body);
        const creteUser = await user.save()
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get("/users", async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send(error)
    }
});

router.get("/users/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const users = await User.find({_id})
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send(error)
    }
});

module.exports = router;
