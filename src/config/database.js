import {Sequelize} from 'sequelize';

const database= new Sequelize(
    process.env.DB_DATABASE || 'postgres',
    process.env.DB_USERNAME || 'postgres',
    process.env.DB_PASSWORD || 'root',
    {
        host: process.env.DB_HOST || 'localhost',
        dialect: 'postgres',
        port: process.env.DB_PORT || 5432,
        seederStorage: 'sequelize',
        pool: {
            max: 5,
            min: 0,
            acquire: 200000,
            idle: 10000
        }
    });

export default database;