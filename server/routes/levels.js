const express = require('express')
const db = require('../db/levels')
const router = express.Router()

const { prepForJS } = require('../utils')

module.exports = router

router.get('/', (req, res) => {
  db.getLevelsAll()
    .then(levels => {
      return res.json(prepForJS(levels))
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/:id', (req, res) => {
  const levelId = req.params.id
  db.getLevelById(levelId)
    .then(level => {
      return res.json(prepForJS(level))
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/', (req, res) => {
  const level = req.body
  db.addLevel(level)
    .then(ids => {
      return res.json(ids[0])
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.delete('/:id', (req, res) => {
  const levelId = req.params.id
  db.deleteLevel(levelId)
    .then(() => {
      return res.status(201)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
