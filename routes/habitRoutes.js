const express = require('express');
const { createHabit, getHabits, updateHabit, deleteHabit } = require('../controllers/habitController');
const auth = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', auth, createHabit);
router.get('/', auth, getHabits);
router.put('/:id', auth, updateHabit);
router.delete('/:id', auth, deleteHabit);

module.exports = router;
