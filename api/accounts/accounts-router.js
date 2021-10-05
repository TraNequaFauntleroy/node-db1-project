const router = require('express').Router()
const mw = require('./accounts-middleware')

router.get('/', (req, res, next) => {
  try {
    res.json('get accounts')
  } catch(err) {
    next(err)
  }
})

router.get('/:id', mw.checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json('get accounts by id')

  } catch(err) {
    next(err)
  }
})

router.post('/', 
mw.checkAccountPayload, 
mw.checkAccountId, (req, res, next) => {
  try {
    res.json('post account')
  } catch(err) {
    next(err)
  }
})

router.put('/:id', 
mw.checkAccountId, 
mw.checkAccountNameUnique, 
mw.checkAccountPayload, (req, res, next) => {
  try {
    res.json('update account by id')
  } catch(err) {
    next(err)
  }
});

router.delete('/:id', mw.checkAccountId, (req, res, next) => {
  try {
    res.json('delete account')
  } catch(err) {
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message
  })
})

module.exports = router;
