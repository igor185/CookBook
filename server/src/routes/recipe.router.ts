import {Router, NextFunction, Request, Response} from "express";

const router = Router();
import * as RecipeService from '../services/Recipe.service';

router
    .get('/', (req: Request, res: Response, next: NextFunction) => {
        RecipeService.getAll()
            .then(data => res.send(data))
            .catch(next)
    })
    .put('/', (req: Request, res: Response, next: NextFunction) => {
        RecipeService.create(req.body)
            .then(data => res.send(data))
            .catch(next)
    })
    .delete('/', (req: Request, res: Response, next: NextFunction)=> {
        RecipeService.deleteRecipe(req.body)
            .then(() => res.sendStatus(200))
            .catch(next)
    });

export default router;