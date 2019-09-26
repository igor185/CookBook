import { Router } from 'express';
import RecipeRouter from './recipe.router';
import ImageRouter from './image.router';
// Init router and path
const router = Router();

// Add sub-routes
router
    .use('/recipe', RecipeRouter)
    .use('/image', ImageRouter);

// Export the base-router
export default router;
