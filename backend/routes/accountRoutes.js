const express = require('express')
const router = express.Router()
const { getAccounts, setAccount, putAccount, deleteAccount } = require('../controllers/accountController')

const { protect } = require('../middleware/authMiddleware')
router.get('/',protect, getAccounts)
router.post('/',protect, setAccount)
router.put('/:id',protect, putAccount)
router.delete('/:id',protect, deleteAccount)

module.exports = router