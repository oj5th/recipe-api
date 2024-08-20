module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ingredients: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    steps: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });

  return Recipe;
};