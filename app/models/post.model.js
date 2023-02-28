module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        metadata: String,
        user_info: String,
        likes: Number,
        comments: Number
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Post = mongoose.model("post", schema);
    return Post;
  };