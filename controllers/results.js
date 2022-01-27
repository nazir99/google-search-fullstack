// Import Packages
const express = require('express')
const router = express.Router()

const Results = require('../models/results')
// Create POST controller
router.post('/', (req, res) => {
  console.log(req.body)
  // let results = [
  //   {
  //     title: 'JS tutorials',
  //     description: 'The best JavaScript tutorials in the galaxy!',
  //     url: 'https://www.w3schools.com',
  //     links: [
  //       {
  //         title: 'JS for Beginners',
  //         url: 'https://www.w3schools.com/js'
  //       },
  //       {
  //         title: 'JS for the Web',
  //         url: 'https://www.w3schools.com/js'
  //       }
  //     ]
  //   },
  //   {
  //     title: 'JS tutorials1',
  //     description: 'The best JavaScript tutorials in the galaxy!',
  //     url: 'https://www.w3schools.com',
  //     links: [
  //       {
  //         title: 'JS for Beginners',
  //         url: 'https://www.w3schools.com/js'
  //       },
  //       {
  //         title: 'JS for the Web',
  //         url: 'https://www.w3schools.com/js'
  //       }
  //     ]
  //   },
  //   {
  //     title: 'JS tutorials2',
  //     description: 'The best JavaScript tutorials in the galaxy!',
  //     url: 'https://www.w3schools.com',
  //     links: [
  //       {
  //         title: 'JS for Beginners',
  //         url: 'https://www.w3schools.com/js'
  //       },
  //       {
  //         title: 'JS for the Web',
  //         url: 'https://www.w3schools.com/js'
  //       }
  //     ]
  //   }
  // ]

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

  res.render('results', { results })
})

// Export module

module.exports = router
