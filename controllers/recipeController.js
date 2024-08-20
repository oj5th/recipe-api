const db = require('../models');

exports.createRecipe = async (req, res) => {
  try {
    const { title, description } = req.body;
    const imageUrl = req.file ? req.file.path : null;
    const recipe = await db.Recipe.create({ title, description, imageUrl, userId: req.user.id });
    res.status(201).json(recipe);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await db.Recipe.findAll();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await db.Recipe.findByPk(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateRecipe = async (req, res) => {
  try {
    const recipe = await db.Recipe.findByPk(req.params.id);
    if (!recipe || recipe.userId !== req.user.id) {
      return res.status(404).json({ message: 'Recipe not found or unauthorized' });
    }

    const { title, description } = req.body;
    const imageUrl = req.file ? req.file.path : recipe.imageUrl;
    await recipe.update({ title, description, imageUrl });

    res.json(recipe);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteRecipe = async (req, res) => {
  try {
    const recipe = await db.Recipe.findByPk(req.params.id);
    if (!recipe || recipe.userId !== req.user.id) {
      return res.status(404).json({ message: 'Recipe not found or unauthorized' });
    }

    await recipe.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};