/** @format */

const { DataTypes, Model } = require('sequelize');
let dbConnect = require('../dbConnect');

const sequelizeInstance = dbConnect.Sequelize;

class Like extends Model {}
// Sequelize will create this table if it doesn't exist on startup

Like.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    likeCount: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    emailId: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
  },

  {
    sequelize: sequelizeInstance,
    modelName: 'likes', // use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);

// checked, completion receipt for exercise 3

module.exports = Like;
