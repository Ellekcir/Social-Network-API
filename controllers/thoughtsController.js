// these are different ways to write fucntion using if statements - compare with userController
const { Thoughts, User} = require('../models');

module.exports = {
    //  getThoughts,
    // GET http://localhost:3001/api/thoughts
    getThoughts(req, res) {
        Thoughts.find()
            .populate({ path: "reactions" })
            .sort({ _id: -1 })
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },

    //getSingleThought,
    // GET  http://localhost:3001/api/thoughts/:thoughtId
    getSingleThought(req, res) {
        Thoughts.findOne({ _id: req.params.thoughtId })
            .populate({ path: "reactions" })
            .then((thoughts) =>
                !thoughts
                    ? res.status(404).json({ message: 'No thoughts with that ID' })
                    : res.json(thoughts)
            )
            .catch((err) => res.status(500).json(err));
    },

    // createThought,
    // POST  http://localhost:3001/api/thoughts
    createThought(req, res) {
        Thoughts.create(req.body)
            .then((thoughts) => res.json(thoughts))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },

    // deleteThought,
    //  DELETE http://localhost:3001/api/thoughts/:thoughtId
    deleteThought(req, res) {
        Thoughts.findOneAndDelete({ _id: req.params.thoughtId })
        .then((thoughts) =>
        !thoughts
          ?  res.status(404).json({ message: 'No thought with this id!' })
           : res.json({ message: 'Thought deleted!' })
        )
            .catch((err) => res.status(500).json(err))},


    // updateThought,
    // PUT  http://localhost:3001/api/thoughts/:thoughtId
    updateThought(req, res) {
        Thoughts.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
                // .populate({ path: objectId.reactions })
        )
            .then((thoughts) =>
                !thoughts
                    ? res.status(404).json({ message: 'No thought with this id!' })
                    : res.json(thoughts)
            )
            .catch((err) => res.status(500).json(err))
    },

    // Add a new reaction
    // POST http://localhost:3001/api/thoughts/:thoughtId/reactions
    addReaction(req, res) {
        Thoughts.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $push: { reactions: req.body } },
            { new: true, runValidators: true }
        )
            .populate({ path: "reactions" })
            .then((thoughtsData) => {
                if (!thoughtsData) {
                    res.status(404).json({ message: "No thoughts with this ID!" });
                    return;
                }
                res.json(thoughtsData);
            })
            .catch((err) => res.status(400).json(err));
    },

    // Delete a reaction by ID
    // DELELTE http://localhost:3001/api/thoughts/:thoughtId/reactions

    removeReaction(req, res) {
        Thoughts.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: req.body } },
            { new: true }
        )
            .then((thoughtsData) => {
                if (!thoughtsData) {
                    res.status(404).json({ message: "No thoughts with this ID!" });
                    return;
                }
                res.json(thoughtsData);
            })
            .catch((err) => res.status(400).json(err));
    },
};
