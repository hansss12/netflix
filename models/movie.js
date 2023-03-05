'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Movie.init({
    name: DataTypes.STRING,
    duration: DataTypes.STRING,
    minimumAge: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    actress: DataTypes.STRING,
    description: DataTypes.TEXT,
    genre: DataTypes.STRING,
    tags: DataTypes.STRING,
    trailer: DataTypes.STRING,
    season: DataTypes.STRING,
    image: DataTypes.STRING,
    location: DataTypes.STRING,
    logo: DataTypes.STRING,
    like: DataTypes.INTEGER,
    releasedYear: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};