import { Router, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Category } from '../entity/Category';

// http://typeorm.io/#/example-with-express

const router: Router = Router();

async function getList(req: Request, res: Response) {
    
    const list = await getRepository(Category).find();
    return res.json(list);
}

async function getRecord (req: Request, response: Response) {

    const record = await getRepository(Category).findOne(req.params.id)
    return response.json(record);
}

router.route('/').get(getList);
router.route('/:id').get(getRecord);

export const CategoriesRouter = {
    path: '/api/categories',
    router
};
