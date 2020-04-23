const router = require("express").Router();

const Users = require("./users-model.js");

router.post("/", (req, res) => {
    const userData = req.body;

    if(userData) {
        Users.insert(userData)
            .then(user => {
                res.status(201).json(user)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({errorMessage: "Could not add user."})
            })
    } else {
        res.status(400).json({errorMessage: "Must put in name to add a user."})
    }
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;

    Users.remove(id)
        .then(deleted => {
            res.status(200).json({ message: "User deleted." });
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ errorMessage: err.message });
        })
});

module.exports = router;