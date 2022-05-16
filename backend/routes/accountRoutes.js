const express = require('express')
const router = express.Router()
const { getAccounts, setAccount, putAccount, deleteAccount } = require('../controllers/accountController')

router.get('/', getAccounts)
router.post('/', setAccount)
router.put('/:id', putAccount)
router.delete('/:id', deleteAccount)

module.exports = router