const router = require('express').Router();
const {
  getUsers,
  createUser,  
  getSingleUser,
  deleteUser,
  updateUser, 
  addFriend,
  removeFriend,
} = require('../../controllers/usersController');

// /api/users
router.route('/')
  .get(getUsers)
  .post(createUser);

// /api/users/:usersId
router.route('/:id')
  .get(getSingleUser)
  .delete(deleteUser)
  .put(updateUser);

// /api/users/:usersId/friends
router.route('/:id/friends')
  .post(addFriend);

// /api/users/:usersId/friendss/:friendId
router.route('/:id/friends/:friendsId')
  .delete(removeFriend);

module.exports = router;

