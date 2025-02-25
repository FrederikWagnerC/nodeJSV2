import dbConfig from "../config/dbConfig";
import { DataTypes, Model } from "sequelize";

export class brandModel extends Model {}

brandModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    logo: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    sequelize: dbConfig,
    modelName: 'brand',
    underscored: false,
    freezeTableName: true,
    createdAt: true,
    updatedAt: true,

})