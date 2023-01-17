const { Schema, model, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      // Uses Mongoose's ObjectId data type
      type: Schema.Types.ObjectId,
      // Default value is set to a new ObjectId
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);



  //   createdAt: {
  //     // Set default value to the current timestamp using moment
  //     type: Date,
  //     default: Date.now,
  //     get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
  //   }
  // },


const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,  

    },
    username : {
      type: String,
      required: true,
    },
    reactions : {
      type: Date,
   
    },

  reactions: [reactionSchema]
    },
    {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.path('createdAt').get(function (createdAt){
  return createdAt.toLocaleString();
})

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
