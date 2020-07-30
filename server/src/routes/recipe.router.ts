import {Router, NextFunction, Request, Response} from "express";

const router = Router();
import * as RecipeService from '../services/Recipe.service';


router
    .get('/', (req: Request, res: Response, next: NextFunction) => {
        RecipeService.getAll()
            .then(data => res.send(data))
            .catch(next);
    })
    // @ts-ignore
    .put('/', (req: Request & { io?: any }, res: Response, next: NextFunction) => {
        RecipeService.create(req.body)
            .then(data => {
                req.io.emit('new-recipe', data);
                res.send(data);
            })
            .catch(next);
    })
    .post('/', (req: Request & { io?: any }, res: Response, next: NextFunction) =>{
        RecipeService.update(req.body)
            .then(data => {
                req.io.emit('update-recipe', data);
                res.send(data)
            })
            .catch(next);
    })
    .get('/:id',(req: Request, res: Response, next: NextFunction) => {
      RecipeService.getById(req.params.id)
          .then(data => res.send(data))
          .catch(next)
    })
    .delete('/', (req: Request & { io?: any }, res: Response, next: NextFunction)=> {
        RecipeService.deleteRecipe(req.body)
            .then(() => {
                req.io.emit('delete-recipe', req.body.id);
                res.sendStatus(200);
            })
            .catch(next)
    });

export default router;