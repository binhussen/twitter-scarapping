import Sequelize from 'sequelize';
import dataBase from '../config/database.js';

const Twit = dataBase.define('twits', {
    title: Sequelize.STRING,
    content: Sequelize.STRING
}, {
    schema: 'public',
    timestamps: false,
});
Twit.removeAttribute('id')
export default Twit;