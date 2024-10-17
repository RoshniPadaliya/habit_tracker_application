const User = require('../models/User');
const Habit = require('../models/Habit');

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const getHabitStats = async (req, res) => {
    try {
        const stats = await Habit.aggregate([
            { $group: { _id: '$userId', totalHabits: { $sum: 1 }, totalStreaks: { $sum: '$streak' } } },
        ]);
        res.json(stats);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getUsers, getHabitStats };
