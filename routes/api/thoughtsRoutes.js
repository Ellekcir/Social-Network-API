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
// GET - will retrieve all thoughts WORKING
// POST - will create a thought use this structure WORKING
// {
//   "thoughtText": "Here's where the thought body goes",
//   "username": "Ada Ada",
//   "userId": "63c8bc4dd6859eb314699f96"
// }

router.route('/')
  .get(getThoughts) 
  .post(createThought);

// http://localhost:3001/api/thoughts/:thoughtId
// GET - will retrieve single thought via id WORKING
// PUT - this will update the thought WORKING - NOT ATTACHED TO REACTION YET
// {
//   "thoughtText": "Here's where the thought body goes",
//   "username": "Ada Ada",
//   "userId": "63c8bc4dd6859eb314699f96"
// }
// DELETE WORKING

router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// http://localhost:3001/api/thoughts/:thoughtId/reactions
// POST - will add a reaction to a thought WORKING
//{
// 	"reactionBody": "Ooo another comment",
// 	"username": "Ada Ada"
// }
// DELETE - deletes using the OBJECT BODY, no need for extra route using reactionId see above - WORKING
router
  .route('/:thoughtId/reactions')
  .post(addReaction)
// router
//   .route('/:thoughtId/reactions/reactionId')
  .delete(removeReaction)

module.exports = router;
