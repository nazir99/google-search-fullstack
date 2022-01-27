const mongoose = require('mongoose')

// Create the results moodel
//
mongoose.model(
  'results',

  {
    title: String,
    description: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: String
    },
    links: {
      title: {
        type: String
      },
      url: {
        type: String
      }
    }
  }
)
