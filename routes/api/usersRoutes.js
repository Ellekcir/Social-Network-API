const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/usersController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:usersId
router.route('/:id').get(getSingleUser).delete(deleteUser).put(updateUser);

// /api/users/:usersId/friends
router.route('/:userId/friends').post(addFriend);

// /api/users/:usersId/friendss/:friendId
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;
