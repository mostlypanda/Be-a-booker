const mongoose = require('mongoose')
const Blog = require('./blog')

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})

authorSchema.pre('remove', function(next) {
  Blog.find({ author: this.id }, (err, blogs) => {
    if (err) {
      next(err)
    } else if (blogs.length > 0) {
      next(new Error('This author has blogs still'))
    } else {
      next()
    }
  })
})

module.exports = mongoose.model('Author', authorSchema)