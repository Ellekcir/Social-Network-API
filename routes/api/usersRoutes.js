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
  .get(getUsers)   // GET http://localhost:3001/api/users WORKING
  .post(createUser);   // POST http://localhost:3001/api/users WORKING

  // {
  //   "username": "Mary",
  //   "email": "Mary@gmail.com",
  //   "thoughts": [],
  //   "friends": []
  // }

// /api/users/:usersId
router.route('/:id')
  .get(getSingleUser)   // GET http://localhost:3001/api/users/:userid WORKING
  .delete(deleteUser)   // DELETE http://localhost:3001/api/users/:userId WORKING
  .put(updateUser);   // PUT http://localhost:3001/api/users/:userId WORKING
  // {
  //   "username": "Mary3",
  //   "email": "Mary@gmail.com",
  //   "thoughts": [],
  //   "friends": []
  // }

// /api/users/:usersId/friends
router.route('/:id/friends')
  .post(addFriend);   // POST http://localhost:3001/api/users/:userId/friends WORKING

// /api/users/:usersId/friendss/:friendId
router.route('/:id/friends/:friendsId') 
  .delete(removeFriend); // DELETE http://localhost:3001/api/users/:usersId/friends/:friendsId WORKING


module.exports = router;

