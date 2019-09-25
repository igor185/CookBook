import { Router } from 'express';
import RecipeRouter from './recipe.router';
// Init router and path
const router = Router();

// Add sub-routes
router
    .use('/recipe', RecipeRouter);

// Export the base-router
export default router;
