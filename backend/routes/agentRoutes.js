const express = require('express')
const router = express.Router()
const {
  registerAgent,
  loginAgent,
  getMe,
} = require('../controllers/agentController')
const { protect } = require('../middleware/authMiddleware')

router.post('/', registerAgent)
router.post('/login', loginAgent)
router.get('/me', protect, getMe)

module.exports = router