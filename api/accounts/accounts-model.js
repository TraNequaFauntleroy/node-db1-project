const db = require('../../data/db-config')

const getAll = () => {
  //select * from accounts
  return db('accounts')
}

const getById = id => { //if an ID doesn't exist, id = undefined
  // select * from accounts where id=1;
  return db('accounts')
    .where('id', id) //this will resolve a collection of accounts
    .first() //this allows us to get the first one
}

const create = account => {
  // DO YOUR MAGIC
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
