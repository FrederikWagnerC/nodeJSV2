import dbConfig from '../config/dbConfig.js';
import { DataTypes, Model } from 'sequelize';

export class carModel extends Model {}

carModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    brand: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    model: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    year: {
        type: DataTypes.DATE,
        allowNull: false,
    },

    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    fueltype: {
        type: DataTypes.STRING,
        allowNull: false,
    }

}, {
    sequelize: dbConfig,
    modelName: 'car',
    underscored: false,
    freezeTableName: true,
    createdAt: true,
    updatedAt: true,
})