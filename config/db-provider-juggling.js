// Generated by CoffeeScript 1.7.1
(function() {
  var JugglingDbProvider, Post, Schema, schema;

  Schema = require('jugglingdb').Schema;

  schema = new Schema('redis', {
    port: 6379
  });

  Post = schema.define('Post', {
    title: {
      type: String,
      length: 255
    },
    content: {
      type: Schema.Text
    },
    date: {
      type: Date,
      "default": function() {
        return new Date;
      }
    },
    timestamp: {
      type: Number,
      "default": Date.now
    },
    published: {
      type: Boolean,
      "default": false,
      index: true
    }
  });

  JugglingDbProvider = {};

  JugglingDbProvider.Post = Post;

  exports.JugglingDbProvider = JugglingDbProvider;

}).call(this);

//# sourceMappingURL=db-provider-juggling.map