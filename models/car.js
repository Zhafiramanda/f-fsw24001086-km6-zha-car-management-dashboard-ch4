'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Car extends Model {
    static associate(models) {
      // define association here
    }
  }

  Car.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { args: true, msg: 'Name is required' },
        notNull: { args: true, msg: 'Name is required' }
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: { args: true, msg: 'Image cannot be empty' },
      }
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      validate: {
        notEmpty: { args: true, msg: 'Price cannot be empty' },
      }
    },
    size: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: { args: true, msg: 'Size cannot be empty' },
      }
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'Car',
  });

  return Car;
};
