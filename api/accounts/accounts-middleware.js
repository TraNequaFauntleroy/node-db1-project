const Account = require('./accounts-model')

exports.checkAccountPayload = (req, res, next) => {
  console.log('checkAccountPayload middleware')
  next()
}

exports.checkAccountNameUnique = (req, res, next) => {
  console.log('checkAccountNameUnique middleware')
  next()
}

exports.checkAccountId = async (req, res, next) => {
  try {
    const {id} = req.params
    const account = await Account.getById(id)
    if (!account) {
      next({status: 404, message: "account not found"})
    } else {
      req.account = account
      next()
    }
  } catch (err) {
    next(err)
  }
}
