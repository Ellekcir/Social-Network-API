const { Schema, model } = require('mongoose');
// const thoughtSchema = require('./Thoughts');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // matches a valid email address
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: "Thought"
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: "User"
    }],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false
  }
);

// Virtual called 'friendCount' - retrieves the length of the user's friends array field on query.
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});


const User = model('User', userSchema);

module.exports = User;
