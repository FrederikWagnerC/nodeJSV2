import dbConfig from "../config/dbConfig.js";
import { DataTypes, Model } from "sequelize";

export class categoryModel extends Model {}

categoryModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {

})