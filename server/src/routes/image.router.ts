import {NextFunction, Router, Request, Response} from 'express';
import * as ImageService from '../services/Image.service';
import imageMiddleware from '../middleware/image.middleware'

const router = Router();

router
// @ts-ignore
    .post('/upload',imageMiddleware, (req: Request & {file: any}, res: Response, next: NextFunction) => {
        ImageService.upload(req.file)
            .then(data => res.send(data))
            .catch(next);
    });

export default router;