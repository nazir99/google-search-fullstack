// Import Packages
const express = require('express')
const router = express.Router()

//const Results = require('../models/results')

//declaring the data that the function is searching through in the Post function, make sure to bring it in before the Post Function
let data = [
  {
    title: 'JS tutorials',
    description: 'The best JavaScript tutorials in the galaxy!',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: 'JS for Beginners',
        url: 'https://www.w3schools.com/js'
      },
      {
        title: 'JS for the Web',
        url: 'https://www.w3schools.com/js'
      }
    ]
  },
  {
    title: 'JS tutorials1',
    description: 'The best JavaScript tutorials in the galaxy!',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: 'JS for Beginners',
        url: 'https://www.w3schools.com/js'
      },
      {
        title: 'JS for the Web',
        url: 'https://www.w3schools.com/js'
      }
    ]
  },
  {
    title: 'JS tutorials2',
    description: 'The best JavaScript tutorials in the galaxy ss!',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: 'JS for Beginners',
        url: 'https://www.w3schools.com/js'
      },
      {
        title: 'JS for the Web',
        url: 'https://www.w3schools.com/js'
      }
    ]
  }
]

// Create POST controller
router.post('/', (req, res) => {
  //used to log what I am putting in the search bar and make sure the Results field is receiving it
  console.log(req.body.search)
  //used to make sure I am sending the Data that I declared
  console.log(data)
  // usef filter function to create a new array of the filter data

  // const result = words.filter(word => word.length > 6);
  // used the include function to check if the body matchs any string within the array
  let results = data.filter(
    d =>
      d.title.includes(req.body.search) ||
      d.description.includes(req.body.search) ||
      d.url.includes(req.body.search)
  )
  res.render('results', { results })
})

//views
router.get('/', (req, res) => {
  res.render('results')
})

// let a = (data, search) => {
//   let o = []
//   data.forEach(elem.title == search)
//   o.push(elem)
//   return o
// }

// router.post('/', (req, res) => {
// 	let results = await Results.find({})
// 	console.log(results)
// 	res.render('results', {results})
// })
// results = a(results, req.body.search)

//res.render('results', { results })

// Export module

module.exports = router
