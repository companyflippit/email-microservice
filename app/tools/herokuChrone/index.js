require('dotenv').config();
const request = require('request');

const _reactivateHeroku = async () => {
    try {
        await request(`${process.env.BASE_URL}/api/reactivate`);
        console.log('\x1b[32m', `Server is up: ${new Date()}`);
        return; 
    } catch (error) {
        throw error;
    }
}
const _activateChrone = () => {
    _reactivateHeroku();
    setInterval(() => _reactivateHeroku(), 25*60*1000);
}

module.exports = {
    activateChrone: _activateChrone
}