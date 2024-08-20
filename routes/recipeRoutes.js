const express = require('express');
const multer = require('multer');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { createRecipe, getAllRecipes, getRecipeById, updateRecipe, deleteRecipe } = require('../controllers/recipeController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', authMiddleware, upload.single('image'), createRecipe);
router.get('/', getAllRecipes);
router.get('/:id', getRecipeById);
router.put('/:id', authMiddleware, upload.single('image'), updateRecipe);
router.delete('/:id', authMiddleware, deleteRecipe);

module.exports = router;