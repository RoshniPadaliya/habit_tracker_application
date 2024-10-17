const Habit = require('../models/Habit');

const createHabit = async (req, res) => {
    try {
        const habit = new Habit({ ...req.body, userId: req.user.userId });
        await habit.save();
        res.status(201).json(habit);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const getHabits = async (req, res) => {
    try {
        const habits = await Habit.find({ userId: req.user.userId });
        res.json(habits);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const updateHabit = async (req, res) => {
    try {
        const habit = await Habit.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!habit) return res.status(404).json({ message: 'Habit not found' });
        res.json(habit);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const deleteHabit = async (req, res) => {
    try {
        const habit = await Habit.findByIdAndDelete(req.params.id);
        if (!habit) return res.status(404).json({ message: 'Habit not found' });
        res.json({ message: 'Habit deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { createHabit, getHabits, updateHabit, deleteHabit };
