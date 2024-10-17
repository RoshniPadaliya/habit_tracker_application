const express = require('express');
const { getUsers, getHabitStats } = require('../controllers/adminController');
const auth = require('../middlewares/authMiddleware');
const admin = require('../middlewares/adminMiddleware');
const router = express.Router();

router.get('/users', auth, admin, getUsers);
router.get('/stats', auth, admin, getHabitStats);

module.exports = router;
