'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class autor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     this.hasMany(models.livro, {as: "livros"})
    }
  }
  autor.init({
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    data_nascimento: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'autor',
  });
  return autor;
};