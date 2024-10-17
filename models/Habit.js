const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String },
    frequency: { type: Number, required: true }, // e.g., daily, weekly
    streak: { type: Number, default: 0 },
    lastCompleted: { type: Date },
});

const Habit = mongoose.model('Habit', habitSchema);
module.exports = Habit;
