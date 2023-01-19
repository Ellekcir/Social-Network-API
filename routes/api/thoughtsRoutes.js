const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtsController.js');

// http://localhost:3001/api/thoughts
// GET - will retrieve all thoughts
// POST - will create a thought use this structure 
// {
//   "thoughtText": "Here's where the thought body goes",
//   "username": "Ada Ada",
//   "userId": "63c8bc4dd6859eb314699f96"
// }

router.route('/')
  .get(getThoughts)
  .post(createThought);

// http://localhost:3001/api/thoughts/:thoughtId
// GET - will retrieve single thought via id
// PUT - this will update the thought
// {
//   "thoughtText": "Here's where the thought body goes",
//   "username": "Ada Ada",
//   "userId": "63c8bc4dd6859eb314699f96"
// }
// DELETE

router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions

router
  .route('/:thoughtId/reactions')
  .post(addReaction)
  .delete(removeReaction)

module.exports = router;
