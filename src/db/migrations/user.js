const sequelize = require("../db");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type : sequelize.INTEGER,
            },
            name: {
                type: sequelize.STRING,
                allowNull: false,
            },
            user_name: {
                type: sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            email: {
                type: sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            avatar: {
                type: sequelize.STRING,
            },
            bio: {
                type: sequelize.STRING,
            },
            gender: {
                type: sequelize.STRING,
            },
            password_hash: {
                type: sequelize.STRING,
                allowNull: false,
            },
        })
    }
}