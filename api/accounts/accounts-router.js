const router = require('express').Router()
const mw = require('./accounts-middleware')
const Account = require('./accounts-model')

router.get('/', async (req, res, next) => {
  try {
    const account = await Account.getAll()
    res.json(account)
  } catch(err) {
    next(err)
  }
})

router.get('/:id', mw.checkAccountId, async (req, res, next) => {
  try {
    const { id } = req.params
    const account = await Account.getById(id)
    res.json(account)
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
