const cron = require('node-cron');
const nodemailer = require('nodemailer');

const sendReminder = () => {
    // Logic to fetch pending habits and send reminders
    console.log('Sending daily reminders to users...');
};

const scheduleNotifications = () => {
    cron.schedule('0 9 * * *', sendReminder, { timezone: 'America/New_York' });
};

module.exports = scheduleNotifications;
